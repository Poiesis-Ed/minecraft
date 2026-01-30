ServerEvents.recipes(event => {
  // -- Mekanism -- //
  event.remove({ output: 'mekanism:digital_miner' })
  event.remove({ output: 'mekanism:dimensional_stabilizer' })
  event.remove({ output: 'mekanism:upgrade_anchor' })
  event.remove({ output: 'mekanism:mekasuit_helmet' })
  event.remove({ output: 'mekanism:mekasuit_bodyarmor' })
  event.remove({ output: 'mekanism:mekasuit_pants' })
  event.remove({ output: 'mekanism:mekasuit_boots' })

  // -- Advanced AE -- //
  event.remove({ output: 'advanced_ae:quantum_helmet' })
  event.remove({ output: 'advanced_ae:quantum_chestplate' })
  event.remove({ output: 'advanced_ae:quantum_leggings' })
  event.remove({ output: 'advanced_ae:quantum_boots' })
  
  // -- Oritech -- //
  event.remove({ output: 'oritech:block_destroyer' })
  event.remove({ output: 'oritech:bedrock_extractor' })
  event.remove({ output: 'oritech:deep_drill' })
  event.remove({ output: 'oritech:quarry_addon' })

  // -- Angel Ring -- //
  event.remove({ output: 'angelring:diamond_ring' })
})