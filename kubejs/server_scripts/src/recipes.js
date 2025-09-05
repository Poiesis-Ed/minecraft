// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes((event) => { 
    // -- ProjectE -- //
    event.remove({output: 'projecte:transmutation_tablet'});
    event.shapeless('projecte:transmutation_tablet', ['projecte:transmutation_table']);
    event.shapeless('projecte:transmutation_table', ['projecte:transmutation_tablet']);

    // -- Project Expansion -- //
    event.remove({mod: 'projectexpansion' });
    event.shaped('projectexpansion:transmutation_interface', [
        'LFL',
        'ATA',
        'LFL',
    ], {
        T: 'projecte:transmutation_table',
        A: 'ae2:annihilation_core',
        F: 'ae2:formation_core',
        L: 'projecte:dark_matter', 
    });

    // -- Mekanism -- //
    event.replaceInput({ input: 'mekanism:pellet_antimatter' }, 'mekanism:pellet_antimatter', 'mekanism:ultimate_control_circuit');
    event.remove({output: 'mekanism:antiprotonic_nucleosynthesizer' });
    
    // -- Tempad -- //
    event.remove({output: 'tempad:tempad'});
    event.shaped('tempad:tempad', [
        'TUT',
        'UWU',
        'TUT'
    ], {
        T: 'mekanism:teleportation_core',
        U: 'mekanism:ultimate_control_circuit',
        W: 'waystones:warp_stone'
    });
    event.custom({
        type: 'cataclysm:weapon_fusion',
        base: { item: 'tempad:tempad' },
        addition: { item: 'cataclysm:void_core' },
        result: { item: 'tempad:he_who_remains_tempad' }
    });

});