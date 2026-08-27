import * as Blockly from 'blockly'

/**
 * Los 21 bloques del constructor de contratos Stellar.
 *
 * Estaban escritos adentro de un `<script>` en el index.html de la version
 * anterior, que ahora vive en `reference/stellar-ui/`. Se portaron tal cual:
 * mismos identificadores, mismos campos y mismos colores, para que un workspace
 * guardado con la version vieja siga cargando.
 *
 * Los identificadores son los que la toolbox y el generador de Rust esperan,
 * asi que cambiar uno rompe los tres archivos a la vez.
 */
export function registerStellarBlocks(): void {
  Blockly.Blocks['contract_settings'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🔮 Mi Contrato Mágico");
                      this.appendStatementInput("SETTINGS")
                          .setCheck(null);
                      this.setColour(290);
                      this.setTooltip("Bloque principal del contrato");
                  }
              };

              Blockly.Blocks['token_name'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("Nombre de la moneda")
                          .appendField(new Blockly.FieldTextInput("Mi Tesoro"), "NAME");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(190);
                      this.setTooltip("Define el nombre de tu token");
                  }
              };

              Blockly.Blocks['token_symbol'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("Símbolo (dibujito)")
                          .appendField(new Blockly.FieldTextInput("ORO"), "SYMBOL");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(190);
                      this.setTooltip("Define el símbolo corto de tu token");
                  }
              };

              Blockly.Blocks['initial_supply'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("💰 Cantidad inicial de monedas")
                          .appendField(new Blockly.FieldNumber(1000, 1), "SUPPLY");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(230);
                      this.setTooltip("Define cuántas monedas se crearán inicialmente");
                  }
              };

              // Bloques de tipo de token
              Blockly.Blocks['token_type'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🎯 Tipo de token")
                          .appendField(new Blockly.FieldDropdown([
                              ["Fungible", "FUNGIBLE"],
                              ["NonFungible", "NON_FUNGIBLE"],
                              ["Stablecoin", "STABLECOIN"]
                          ]), "TYPE");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(160);
                      this.setTooltip("Selecciona el tipo de token que quieres crear");
                  }
              };

              // Bloques de características básicas
              Blockly.Blocks['feature_mintable'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("⚡ Mintable")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(120);
                      this.setTooltip("Permite crear más tokens después del despliegue");
                  }
              };

              Blockly.Blocks['feature_burnable'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🔥 Burnable")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(120);
                      this.setTooltip("Permite quemar tokens para reducir el suministro");
                  }
              };

              Blockly.Blocks['feature_pausable'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("⏸️ Pausable")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(120);
                      this.setTooltip("Permite pausar todas las transferencias del token");
                  }
              };

              Blockly.Blocks['feature_upgradeable'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🔄 Upgradeable")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(120);
                      this.setTooltip("Permite actualizar el contrato en el futuro");
                  }
              };

              // Bloques de características avanzadas
              Blockly.Blocks['feature_governance'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🗳️ Governance")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(120);
                      this.setTooltip("Permite votación descentralizada para cambios");
                  }
              };

              Blockly.Blocks['feature_stakeable'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🥩 Stakeable")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(120);
                      this.setTooltip("Permite hacer staking para generar recompensas");
                  }
              };

              Blockly.Blocks['feature_timelock'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("⏰ Time Lock")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED")
                          .appendField("Días:")
                          .appendField(new Blockly.FieldNumber(30, 1, 365), "DAYS");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(120);
                      this.setTooltip("Bloquea tokens por un período de tiempo");
                  }
              };

              // Bloques de seguridad
              Blockly.Blocks['access_control'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🔐 Control de Acceso")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(80);
                      this.setTooltip("Habilita sistema de roles y permisos");
                  }
              };

              Blockly.Blocks['security_transferlimit'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🚦 Límite de Transferencia")
                          .appendField(new Blockly.FieldNumber(1000, 0), "LIMIT");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(80);
                      this.setTooltip("Límite máximo por transferencia");
                  }
              };

              Blockly.Blocks['security_whitelist'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("📋 Whitelist")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(80);
                      this.setTooltip("Solo direcciones aprobadas pueden transferir");
                  }
              };

              Blockly.Blocks['security_freezeable'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🧊 Freezeable")
                          .appendField(new Blockly.FieldCheckbox("FALSE"), "ENABLED");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(80);
                      this.setTooltip("Permite congelar cuentas específicas");
                  }
              };

              // Bloques de economía
              Blockly.Blocks['economics_fee'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("💰 Fee de Transacción")
                          .appendField(new Blockly.FieldNumber(0, 0, 100), "FEE")
                          .appendField("%");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(220);
                      this.setTooltip("Porcentaje de fee por cada transacción");
                  }
              };

              Blockly.Blocks['economics_burnrate'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🔥 Burn Rate")
                          .appendField(new Blockly.FieldNumber(0, 0, 100), "RATE")
                          .appendField("% por transacción");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(220);
                      this.setTooltip("Porcentaje de tokens quemados automáticamente");
                  }
              };

              Blockly.Blocks['economics_staking'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("🎯 Staking Reward")
                          .appendField(new Blockly.FieldNumber(5, 0, 100), "REWARD")
                          .appendField("% anual");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(220);
                      this.setTooltip("Recompensa anual por hacer staking");
                  }
              };

              // Bloques de información
              Blockly.Blocks['security_contact'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("📧 Contacto de Seguridad")
                          .appendField(new Blockly.FieldTextInput("security@example.com"), "EMAIL");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(300);
                      this.setTooltip("Email de contacto para reportar problemas de seguridad");
                  }
              };

              Blockly.Blocks['license'] = {
                  init: function () {
                      this.appendDummyInput()
                          .appendField("📄 Licencia")
                          .appendField(new Blockly.FieldDropdown([
                              ["MIT", "MIT"],
                              ["GPL-3.0", "GPL-3.0"],
                              ["Apache-2.0", "Apache-2.0"],
                              ["BSD-3-Clause", "BSD-3-Clause"],
                              ["Unlicense", "Unlicense"]
                          ]), "LICENSE");
                      this.setPreviousStatement(true, null);
                      this.setNextStatement(true, null);
                      this.setColour(300);
                      this.setTooltip("Tipo de licencia para tu contrato");
                  }
              };
}

/** Los tipos de bloque que define este modulo, en el orden en que aparecen. */
export const STELLAR_BLOCK_TYPES = [
  'contract_settings',
  'token_name',
  'token_symbol',
  'initial_supply',
  'token_type',
  'feature_mintable',
  'feature_burnable',
  'feature_pausable',
  'feature_upgradeable',
  'feature_governance',
  'feature_stakeable',
  'feature_timelock',
  'access_control',
  'security_transferlimit',
  'security_whitelist',
  'security_freezeable',
  'economics_fee',
  'economics_burnrate',
  'economics_staking',
  'security_contact',
  'license',
] as const
