ServerEvents.recipes(event => {
  // -- AE2 -- //
  event.remove({ id: 'aeinfinitybooster:infinity_card' })
  event.shaped(
    Item.of('aeinfinitybooster:infinity_card', 1),
    [
      'BEB', 
      'ENE', 
      'BEB'
    ],
    {
      B: 'ae2:wireless_booster',
      E: 'minecraft:ender_eye',
      N: 'minecraft:nether_star'
    }
  )

  event.remove({ id: 'aeinfinitybooster:dimension_card' })
  event.shapeless(
    Item.of('aeinfinitybooster:dimension_card', 1), 
    [
      'aeinfinitybooster:infinity_card'
    ]
  )

  // -- Angel Ring -- //
  event.remove({ id: 'angelring:angel_ring' })
  event.shaped(
    Item.of('angelring:angel_ring', 1),
    [
      'DGD',
      'GEG',
      'NGN'
    ],
    {
      D: 'minecraft:diamond_block',
      G: 'minecraft:gold_block',
      E: 'minecraft:elytra',
      N: 'minecraft:netherite_ingot'
    }
  )

})