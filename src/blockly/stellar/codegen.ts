/**
 * Genera el codigo Rust del contrato Soroban a partir de lo que se armo con los
 * bloques.
 *
 * Portado desde `reference/stellar-ui/index.html`. Es el generador del lado
 * cliente: el backend (`server/index.cjs`) tiene el suyo con plantillas
 * Handlebars, y los dos tienen que producir lo mismo. Si divergen, el usuario ve
 * una cosa en pantalla y se despliega otra.
 */
export function generateAdvancedRustCode(data) {
            const features = [];

            if (data.features.mintable) features.push('Mintable');
            if (data.features.burnable) features.push('Burnable');
            if (data.features.pausable) features.push('Pausable');
            if (data.features.upgradeable) features.push('Upgradeable');
            if (data.features.governance) features.push('Governance');
            if (data.features.stakeable) features.push('Stakeable');
            if (data.features.timeLock) features.push('TimeLock');
            if (data.features.accessControl) features.push('AccessControl');

            return `// Smart Contract: ${data.name || 'Mi Token'}
// Generado automáticamente por Tralalero Contracts
#![no_std]

use soroban_sdk::{
    contract, contractimpl, Address, Env, String, Symbol, Map,
    token::{self, Interface as TokenInterface},
    auth::{Context, CustomAccountInterface},
    ${data.features.governance ? 'governance::GovernanceInterface,' : ''}
    ${data.features.stakeable ? 'staking::StakingInterface,' : ''}
};

// Constantes del contrato
const TOKEN_NAME: &str = "${data.name || 'Mi Token'}";
const TOKEN_SYMBOL: &str = "${data.symbol || 'TOKEN'}";
const DECIMALS: u32 = ${data.decimals || 2};
const INITIAL_SUPPLY: i128 = ${data.supply || 1000};

// Claves de almacenamiento
const ADMIN: Symbol = symbol_short!("ADMIN");
const PAUSED: Symbol = symbol_short!("PAUSED");
const TOTAL_SUPPLY: Symbol = symbol_short!("TOTAL_SUP");
${data.security.transferLimit ? `const TRANSFER_LIMIT: Symbol = symbol_short!("TRANS_LIM");` : ''}
${data.features.stakeable ? `const STAKING_POOL: Symbol = symbol_short!("STAKING");` : ''}

#[contract]
pub struct TokenContract;

#[contractimpl]
impl TokenContract {

    /// Inicializa el contrato con configuración personalizada
    pub fn initialize(env: Env, admin: Address) {
        if env.storage().instance().has(&ADMIN) {
            panic!("Contract already initialized");
        }

        env.storage().instance().set(&ADMIN, &admin);
        env.storage().instance().set(&TOTAL_SUPPLY, &INITIAL_SUPPLY);
        ${data.features.pausable ? 'env.storage().instance().set(&PAUSED, &false);' : ''}
        ${data.security.transferLimit ? `env.storage().instance().set(&TRANSFER_LIMIT, &${data.security.transferLimit});` : ''}

        // Mint inicial al admin
        if INITIAL_SUPPLY > 0 {
            token::Client::new(&env, &env.current_contract_address())
                .mint(&admin, &INITIAL_SUPPLY);
        }
    }

    /// Metadata del token
    pub fn name(env: Env) -> String {
        String::from_str(&env, TOKEN_NAME)
    }

    pub fn symbol(env: Env) -> String {
        String::from_str(&env, TOKEN_SYMBOL)
    }

    pub fn decimals(env: Env) -> u32 {
        DECIMALS
    }

    ${data.features.mintable ? `
    /// Mint nuevos tokens (solo admin)
    pub fn mint(env: Env, to: Address, amount: i128) {
        Self::check_admin(&env);
        ${data.features.pausable ? 'Self::check_not_paused(&env);' : ''}

        token::Client::new(&env, &env.current_contract_address())
            .mint(&to, &amount);
    }` : ''}

    ${data.features.burnable ? `
    /// Burn tokens
    pub fn burn(env: Env, from: Address, amount: i128) {
        from.require_auth();
        ${data.features.pausable ? 'Self::check_not_paused(&env);' : ''}

        token::Client::new(&env, &env.current_contract_address())
            .burn(&from, &amount);
    }` : ''}

    ${data.features.pausable ? `
    /// Pausar el contrato (solo admin)
    pub fn pause(env: Env) {
        Self::check_admin(&env);
        env.storage().instance().set(&PAUSED, &true);
    }

    /// Despausar el contrato (solo admin)
    pub fn unpause(env: Env) {
        Self::check_admin(&env);
        env.storage().instance().set(&PAUSED, &false);
    }` : ''}

    ${data.features.stakeable ? `
    /// Hacer staking de tokens
    pub fn stake(env: Env, from: Address, amount: i128) {
        from.require_auth();
        Self::check_not_paused(&env);

        // Lógica de staking...
        // TODO: Implementar pool de staking
    }` : ''}

    /// Funciones auxiliares
    fn check_admin(env: &Env) {
        let admin: Address = env.storage().instance().get(&ADMIN).unwrap();
        admin.require_auth();
    }

    ${data.features.pausable ? `
    fn check_not_paused(env: &Env) {
        let paused: bool = env.storage().instance().get(&PAUSED).unwrap_or(false);
        if paused {
            panic!("Contract is paused");
        }
    }` : ''}
}

// Características habilitadas: ${features.join(', ') || 'Ninguna'}
// Límite de transferencia: ${data.security.transferLimit || 'Sin límite'}
// Recompensa de staking: ${data.economics.stakingReward || 0}% anual
// Fee de transacción: ${data.economics.transactionFee || 0}%
// Burn rate: ${data.economics.burnRate || 0}%`;
        }
