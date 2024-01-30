ServerEvents.recipes(event => {
  // -- minecraft -- //
  event.remove({ output: 'minecraft:emerald' }) // ensure emerald is not craftable
  event.remove({ output: 'minecraft:diamond' }) // ensure diamond is not craftable
  // -- projectexpansion -- //

  event.remove({ mod: "projectexpansion" }); // nuke default
  
  event.shaped('1x projectexpansion:transmutation_interface', [
    'RCR',
    'CIC',
    'RCR'
  ], {
    R: 'projecte:red_matter',
    I: 'ae2:interface',
    C: 'ae2:fluix_glass_cable'
  }) // transmutation interface

  event.shaped('1x projectexpansion:knowledge_sharing_book', [
    'RTR',
    'TBT',
    'RTR'
  ], {
    R: 'projecte:red_matter',
    T: 'projecte:transmutation_tablet',
    B: 'minecraft:book'
  }) // knowledge sharing book

  event.shapeless('1x projectexpansion:infinite_steak', [
    'projecte:transmutation_table', 'minecraft:cooked_beef'
  ]) // infinite steak

  
  // -- projecte -- //
  event.remove({ output: 'projecte:transmutation_tablet' }) // remove tablet default

  event.remove({ output: "projecte:rm_katar" }) // nuke red matter katar recipe
  event.remove({ output: "projecte:rm_sword" }) // nuke red matter sword recipe
  event.remove({ output: "projecte:dm_pedestal" }) // nuke dark matter pedestal recipe

  event.remove({ output: "projecte:collector_mk1" }) // nuke power flower recipe
  event.remove({ output: "projecte:relay_mk1" }) // nuke power flower recipe

  // add new shapeless tablet recipe
  event.shapeless('1x projecte:transmutation_tablet', [
    'projecte:transmutation_table',
  ]) // tablet
  

  // -- mekanism -- //

  // nuke antiprotonic nucleosynthesizer recipe
  event.remove({ output: 'mekanism:antiprotonic_nucleosynthesizer' })

})