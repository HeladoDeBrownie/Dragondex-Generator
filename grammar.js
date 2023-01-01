var grammar = tracery.createGrammar({
    'origin': '~ #species name.toUpperCase# ~\n\n#stat block#\n\n#description#\n\nCOMPATIBLE WITH: #compatibility#',

    /* species name */

    'species name': '#species name prefix.capitalize##species name suffix#',

    'species name prefix': [
        '#color#',
        '#dra*-#',
        '#element#',
        '#emotion#',
        '#prefixes that want to be matched with -gon#',
        '#size#',
        '#namesake body part#',
    ],
    'color': [
        '#basic color#', '#basic color#',
        '#metal color#', '#metal color#',
        '#rock color#',
    ],
    'basic color': [
        'blue',
        'gray',
        'green',
        'pale',
        'red',
        'yellow',
    ],
    'metal color': [
        'bronze',
        'copper',
        'ferro',
        'gold',
        'silver',
    ],
    'rock color': [
        'amber',
        'jade',
        'onyx',
        'quartz',
        'slate',
    ],
    'dra*-': [
        'drag',
        'drak',
        'draken',
    ],
    'element': [
        'aero',
        'pulmo',
        'aqua',
        'hydro',
        'igneo',
        'pyro',
        'gaia',
        'terra',
        'alma',
        'pneuma',
    ],
    'emotion': [
        'awe',
        'doom',
        'dread',
        'gloom',
        'terror',
        'woe',
        'wonder',
    ],
    'prefixes that want to be matched with -gon': [
        'carcino',
        'cryo',
        'hydro',
        'nitro',
        'para',
        'patho',
        '#number prefix#',
    ],
    'number prefix': [
        'penta',
        'hexa',
        'hepta',
        'octa',
        'poly',
    ],
    'size': [
        'big',
        'great',
        'mega',
        'lil',
        'mini',
        'tiny',
    ],

    'species name suffix': [
        'breath',
        'don',
        'gon',
        'saur',
        'zard',
        '#-dra*#',
        '#namesake body part#',
    ],
    '-dra*': [
        'dra',
        'dracky',
        'drak',
        'drake',
    ],

    'namesake body part': '#[#body part!#]singular body part#',

    /* stat block */

    'stat block': '#stat 1#\n#stat 2#\n#stat 3#',

    'stat 1': '#stat 1 name# #stat value#',
    'stat 1 name': [
        'APTITUDE:         ',
        'MEMORY:           ',
        'WISDOM:           ',
        'WITS:             ',
        'DEADLINESS:       ',
        'FEARSOMENESS:     ',
        'MIGHT:            ',
        'VALOR:            ',
    ],

    'stat 2': '#stat 2 name# #stat value#',
    'stat 2 name': [
        'ENDURANCE:        ',
        'FLEXIBILITY:      ',
        'HARDNESS:         ',
        'SPEED:            ',
        'KINESTHETIC SENSE:',
        'PAIN TOLERANCE:   ',
        'PATIENCE:         ',
        'SELF-PRESERVATION:',
    ],

    'stat 3': '#stat 3 name# #stat value#',
    'stat 3 name': [
        'COMMUNICATION:    ',
        'EMPATHY:          ',
        'FRIEND-SHAPEDNESS:',
        'HELPFULNESS:      ',
        'PULCHRITUDE:      ',
        'SELF-AWARENESS:   ',
        'TEMPERAMENT:      ',
        'UNASSUMINGNESS:   ',
    ],

    'stat value': [
        '#common stat value#', '#common stat value#', '#common stat value#', '#common stat value#', '#common stat value#', '#common stat value#',
        '#unusual stat value#', '#unusual stat value#', '#unusual stat value#',
        '#rare stat value#',
    ],
    'common stat value': ['★★☆☆☆ ', '★★★☆☆ ', '★★★★☆ '],
    'unusual stat value': ['★☆☆☆☆ ', '★★★★★ '],
    'rare stat value': ['☆☆☆☆☆ ', '★★★★★★'],

    /* description */

    'description': ['#concrete fact# #abstract fact#'],

    'concrete fact': [
        'It #eats# #diet#.',
        'It #inhabits# #places#.',
        'It #likes# #thing#.',
    ],

    'eats': [
        'derives most of its nutrition from',
        'eats',
        'preys on',
        'subsists on',
    ],
    'diet': [
        'bird eggs',
        'fruits',
        'humans',
        'lesser beasts',
        'other dragons',
        'nuts',
        'rocks',
        '#human food# stolen from humans',
    ],

    'inhabits': [
        'appears in',
        'inhabits',
        'is often found in',
        'lives in',
    ],
    'places': [
        '#cold places#',
        '#forests#',
        '#human places#',
        '#the sky#',
        '#swamps#',
        '#watery places#',
    ],
    'cold places': [
        'mountaintops',
        'the polar regions',
        'snowy #forests#',
        'tundras',
    ],
    'forests': [
        'densely forested areas',
        'forests',
        'undergrowth',
        'woods',
        '#uncommon forests#',
    ],
    'uncommon forests': [
        'coniferous forests',
        'deep woods',
        'mysterious clearings in the woods',
    ],
    'human places': [
        'abandoned villages',
        'basements',
        'chimneys',
        'houses',
        'kitchens',
        'sheds',
        'the walls of houses',
        'water closets',
        'wells',
    ],
    'the sky': [
        'clouds',
        'stormclouds',
        '#uncommon sky places#',
    ],
    'uncommon sky places': [
        'tornadoes',
        'the upper stratosphere',
        '#rare sky places#',
    ],
    'rare sky places': [
        'low orbit',
        'places where the horizon touches the earth',
        'places where mountaintops touch the sky',
    ],
    'swamps': [
        'grottos',
        'marshes',
        'mires',
        'swamps',
        'wetlands',
    ],
    'watery places': [
        'lakes',
        'ponds',
        'rivers',
        'streams',
        '#the ocean#',
    ],
    'the ocean': [
        'the deep ocean',
        'the forgotten depths',
        'the ocean',
        'ocean trenches',
    ],

    'likes': [
        // positive
        'covets',
        'enjoys',
        'is drawn to',
        'likes',
        'obsesses over',
        'prefers',
        // negative
        'disdains',
        'dislikes',
        'despises',
        'fears',
        'is repulsed by',
        'shuns',
    ],
    'thing': [
        'company',
        'darkness',
        'moonlight',
        'the scent of #scented thing#',
        'shiny things',
        'solitude',
        'sunlight',
        'warm rocks',
    ],
    'scented thing': [
        'dew',
        'flowers',
        'garbage',
        'perfume',
        'seawater',
        'sulfur',
        '#human food#',
    ],

    'abstract fact': [
        '#legend#',
        '#endangerment#',
        '#presence#',
    ],

    'legend': '#legend intro# #[#body part!#]legend content#',
    'legend intro': [
        'According to dragon ranchers,',
        "It's commonly believed that",
        "It's said that",
        'Legends say',
        'Rumor has it',
        'Scientists have observed that',
        'Travelers have reported that',
    ],
    'legend content': [
        'it can #destroy# #a destroyable item# with its #body part#.',
        'it can out#maneuver# #a vehicle#.',
        'it only appears to #qualified people#.',
        'its #body part# #has remarkable trait#.',
    ],
    'destroy': [
        'annihilate',
        'crush',
        'destroy',
        'rip apart',
        'tear through',
    ],
    'a destroyable item': [
        '#a natural feature#',
        '#a building#',
        '#a vehicle#',
    ],
    'a natural feature': [
        'a boulder',
        'a hillside',
        'a mountain',
        'a tree',
    ],
    'a building': [
        'a bridge',
        'a castle',
        'a fortress',
        'a house',
        'a skyscraper',
    ],
    'maneuver': [
        'dig',
        'fly',
        'run',
        'swim',
    ],
    'a vehicle': [
        'a chariot',
        'a sailboat',
        'a train',
        '#an uncommon vehicle#',
    ],
    'an uncommon vehicle': [
        'a bus',
        'a car',
        'a freight ship',
        '#a rare vehicle#',
    ],
    'a rare vehicle': [
        'a cruise missile',
        'a helicopter',
        'a submarine',
    ],
    'qualified people': [
        'lone travelers',
        'those at their lowest',
        'those close to death',
        'those in possession of #human food#',
        'those most in need',
        'those pure of heart',
        'those who have seen death',
        'those with wicked intentions',
    ],
    'has remarkable trait': [
        'can regenerate from any damage',
        'constantly emit#body part s# #sound#',
        'evoke#body part s# thoughts of #thing# in all who witness it',
        '#body part has# astounding healing powers',
        '#body part is# brighter than the sun',
        '#body part is# harder than diamond',
        '#body part is# not made of any earthly substance',
    ],

    'endangerment': 'It #is endangered# due to #endangerment reason#.',
    'is endangered': '#endangered 1#',
    'endangered 1': ['is at threat of extinction', '#endangered 2#'],
    'endangered 2': ['is critically endangered', '#endangered 3#'],
    'endangered 3': ['is almost extinct', '#endangered 4#'],
    'endangered 4': ['is extinct save for a single specimen', '#endangered 5#'],
    'endangered 5': 'was believed extinct #extinction period#',
    'extinction period': [
        'for a decade',
        'for a century',
        'for centuries',
        'since antiquity',
    ],
    'endangerment reason': [
        'being outcompeted for food',
        'food scarcity',
        'overhunting',
        'pollution',
    ],

    'presence': 'Whenever you #notice something odd# #at a specific time#, #presence consequence#.',
    'notice something odd': [
        'are overwhelmed with #fear#',
        'feel #feeling#',
        'hear #sound#',
        'smell #odd smell#',
    ],
    'fear': [
        'anxiety',
        'apprehension',
        'dread',
        'fear',
        'terror',
    ],
    'feeling': [
        'a weariness deep in your bones',
        'an unshakable chill',
    ],
    'odd smell': [
        '#scented thing#',
        'something rotting',
        'something sickly sweet',
    ],
    'at a specific time': [
        'after someone has died',
        "after you've spoken its name",
        'during a joyous celebration',
        'in the dead of night',
        'on a dewy morning',
        'on a rainy day',
        'on the night of a full moon',
        'while no one else is in the room',
    ],
    'presence consequence': [
        '#it is there#',
        '#presence advice#',
    ],
    'it is there': [
        'it is there',
        'it is already too late',
        'you are about to #be visited#',
    ],
    'be visited': [
        'be graced with its presence',
        'be haunted by one',
        'be one of the lucky few',
        'be visited',
        'gain a new friend',
    ],
    'presence advice': [
        'be ready for it',
        "run and don't look back",
        'stand perfectly still and #act unthreatening#',
    ],
    'act unthreatening': [
        'do not make eye contact',
        'do not speak or make a sound',
        "repeat your village's #mantra# until it leaves",
        'slowly crouch as low as you can',
        'think only positive thoughts',
    ],
    'mantra': [
        'beast lullaby',
        'draconic mantra',
        'prayer for safety',
    ],

    'human food': [
        'bread',
        'burritos',
        'farm produce',
        'spaghetti',
        'steak',
        'sweets',
    ],
    'sound': [
        'a deep rumbling',
        'a distant chiming',
        'indistinct whispers',
    ],

    /* compatibility */

    'compatibility': [
        '#species name#',
        '#species name#',
        '#species name# and #species name#',
        '#species name#, #species name#, and #species name#',
        'others of its species',
        'others of its species',
        'none; do not house with other dragons',
    ],

    /* miscellaneous */

    'body part!': [
        '[body part:barbs][singular body part:barb][body part is:are][body part has:have][body part s:]',
        '[body part:claws][singular body part:claw][body part is:are][body part has:have][body part s:]',
        '[body part:crest][singular body part:crest][body part is:is][body part has:has][body part s:s]',
        '[body part:fangs][singular body part:fang][body part is:are][body part has:have][body part s:]',
        '[body part:horns][singular body part:horn][body part is:are][body part has:have][body part s:]',
        '[body part:scales][singular body part:scale][body part is:are][body part has:have][body part s:]',
        '[body part:snout][singular body part:snout][body part is:is][body part has:has][body part s:s]',
        '[body part:stinger][singular body part:stinger][body part is:is][body part has:has][body part s:s]',
        '[body part:tail][singular body part:tail][body part is:is][body part has:has][body part s:s]',
        '[body part:wings][singular body part:wing][body part is:are][body part has:have][body part s:]',
    ],
})

grammar.addModifiers(baseEngModifiers)
grammar.addModifiers({
    toUpperCase: function (string) {
        return string.toUpperCase()
    }
})