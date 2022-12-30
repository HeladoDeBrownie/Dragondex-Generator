var grammar = tracery.createGrammar({
    'origin':       'SPECIES: #species name#\n#stat 1#\n#stat 2#\n#stat 3#\n\n#description#\n\nCOMPATIBLE WITH: #compatibility#',

    /* species names */

    'species name': '#species name prefix.capitalize##species name suffix#',
    'species name prefix': [
        'drak',
        '#namesake body part#',
        '#color#',
        '#element#',
        '#emotion#',
        '#prefixes that want to be matched with -gon#',
        '#size#',
    ],
    'species name suffix': [
        'breath',
        'don',
        'dra',
        'drak',
        'drake',
        'gon',
        'saur',
        'zard',
        '#namesake body part#',
    ],
    'namesake body part': [
        'claw',
        'fang',
        'horn',
        'scale',
        'snout',
        'wing',
    ],
    'prefixes that want to be matched with -gon': [
        'carcino',
        'cryo',
        'hydro',
        'nitro',
        'para',
        'patho',
        'poly',
    ],
    'color': [
        'blue',
        'bronze',
        'copper',
        'gold',
        'gray',
        'green',
        'red',
        'silver',
        'yellow',
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
    'size': [
        'big',
        'great',
        'mega',
        'lil',
        'mini',
        'tiny',
    ],

    /* stats */

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
        'It #inhabits# #type of place#.',
        'It #likes# #thing#.',
    ],

    'eats': [
        'derives most of its nutrition from',
        'eats',
        'preys on',
        'subsists on',
    ],
    'diet': [
        'fruits',
        'humans',
        'lesser beasts',
        'other dragons',
        'nuts',
        'rocks',
        '#human food# stolen from humans',
    ],
    'human food': [
        'bread',
        'burritos',
        'spaghetti',
        'steak',
    ],

    'inhabits': [
        'inhabits',
        'is often found in',
        'lives in',
    ],
    'type of place': [
        'clouds',
        'forests',
        '#human places#',
        'swamps',
    ],
    'human places': [
        'basements',
        'chimneys',
        'houses',
        'kitchens',
        'the walls of houses',
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
        'solitude',
        'sunlight',
    ],
    'scented thing': [
        'dew',
        'flowers',
        'garbage',
        'perfume',
        'seawater',
        'sulfur',
    ],

    'abstract fact': [
        '#legend intro# #[#body part!#]legend content#',
        'It #is endangered# due to #endangerment reason#.',
        'Whenever you #presence notification# #at a time#, #presence consequence#.'
    ],

    'legend intro': [
        "It's said that",
        'Legends say',
        'Rumor has it',
        'Scientists have observed that',
    ],

    'legend content': [
        'it can #destroy# #a destroyable item# with its #body part#.',
        'it can out#maneuver# #a vehicle#.',
        'it only appears to #qualified people#.',
        'its #body part# #has remarkable trait#.',
    ],

    'qualified people': [
        'lone travelers',
        'those at their lowest',
        'those close to death',
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

    'destroy': [
        'crush',
        'destroy',
        'tear through',
    ],

    'a destroyable item': [
        'a boulder',
        'a house',
        '#a vehicle#',
    ],

    'maneuver': [
        'dig',
        'fly',
        'run',
        'swim',
    ],

    'a vehicle': [
        'a car',
        'a chariot',
        'a cruise missile',
        'a freight ship',
        'a helicopter',
        'a sailboat',
        'a train',
    ],

    'body part!': [
        '[body part:claws][body part is:are][body part has:have][body part s:]',
        '[body part:fangs][body part is:are][body part has:have][body part s:]',
        '[body part:horns][body part is:are][body part has:have][body part s:]',
        '[body part:scales][body part is:are][body part has:have][body part s:]',
        '[body part:snout][body part is:is][body part has:has][body part s:s]',
        '[body part:wings][body part is:are][body part has:have][body part s:]',
    ],

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

    'presence notification': [
        'are overwhelmed with #fear#',
        'feel #feeling#',
        'hear #sound#',
        'smell #smell#',
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
    'sound': [
        'a deep rumbling',
        'a distant chiming',
        'indistinct whispers',
    ],
    'smell': [
        '#scented thing#',
        'something rotting',
        'something sickly sweet',
    ],
    'at a time': [
        'after someone has died',
        'during a joyous celebration',
        'in the dead of night',
        'on a dewy morning',
        'on a rainy day',
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
    'be visited': [
        'be graced with its presence',
        'be haunted by one',
        'be one of the lucky few',
        'be visited',
        'gain a new friend',
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
})

grammar.addModifiers(baseEngModifiers)
