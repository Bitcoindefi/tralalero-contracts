/**
 * La toolbox del constructor Stellar: 7 categorias.
 *
 * Los `type` de cada bloque tienen que coincidir con los que registra
 * `blocks.ts`. Si no coinciden, Blockly no falla: simplemente no muestra el
 * bloque, que es peor porque no se nota.
 */
export const STELLAR_TOOLBOX = `
<xml>
    <category name="🚀 Empezar">
        <block type="contract_settings"></block>
    </category>
    <category name="⚙️ Configuración Básica">
        <block type="token_type"></block>
        <block type="token_name"></block>
        <block type="token_symbol"></block>
        <block type="initial_supply"></block>
    </category>
    <category name="✨ Características Básicas">
        <block type="feature_mintable"></block>
        <block type="feature_burnable"></block>
        <block type="feature_pausable"></block>
        <block type="feature_upgradeable"></block>
    </category>
    <category name="🎯 Características Avanzadas">
        <block type="feature_governance"></block>
        <block type="feature_stakeable"></block>
        <block type="feature_timelock"></block>
    </category>
    <category name="🔐 Seguridad">
        <block type="access_control"></block>
        <block type="security_transferlimit"></block>
        <block type="security_whitelist"></block>
        <block type="security_freezeable"></block>
    </category>
    <category name="💰 Economía">
        <block type="economics_fee"></block>
        <block type="economics_burnrate"></block>
        <block type="economics_staking"></block>
    </category>
    <category name="📋 Información">
        <block type="security_contact"></block>
        <block type="license"></block>
    </category>
</xml>
`
