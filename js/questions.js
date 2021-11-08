const questions = [
    {
        "question": "Our focus should be on individuals rather than group identities.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Freedom of business is the best practical way a society can prosper.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Capitalism is better than any existing alternative.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Charity is a better way of helping those in need than social welfare.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Those with the ability to pay should have access to higher standards of medical care.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Wages are always fair, as employers know best what a worker's labour is worth.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Government intervention is a threat to the economy.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Communism is a bad idea and can never work in practice.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "The freer the markets, the freer the people.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "The harder you work, the more you progress up the social ladder.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "Those with a greater ability to pay should receive better healthcare.",
        "effects": {
            "right": 1
        }
    },
    {
        "question": "It is okay to restrict individual rights if the community benefits from it.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "Taxes should be increased on the rich to provide for the poor.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "Organisations and corporations cannot be trusted and need regulating by the government.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "Basic utilities like roads and electricity should be publicly owned.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "The current welfare system should be expanded to further combat inequality.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "People born to wealthy families have unfair success even when they aren't skilled and don't work hard.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "Land should not be a commodity to be bought and sold.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "All industry and the bank should be nationalised.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "The means of production should belong to the workers who use them.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "Communism, if implemented correctly, would be a good form of economics.",
        "effects": {
            "right": -1
        }
    },
    {
        "question": "Elections are a waste of resources.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "Sometimes it is right that the government may spy on its citizens to combat extremists and terrorists.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "Military action by our nation is often necessary to protect it.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "Strength is necessary for any government to succeed.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "Only the government can fairly and effectively regulate organisations.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "Society requires structure and bureaucracy in order to function.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "Mandatory IDs should be used to ensure public safety.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "In times of crisis, safety becomes more important than civil liberties.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "I’d always support my country, whether it was right or wrong.",
        "effects": {
            "auth": 1
        }
    },
    {
        "question": "It is important that the government follows the majority opinion, even if it is wrong.",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "The government should be less involved in the day to day life of its citizens.",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "Democracy is more than a decision-making process.",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "Military spending is a waste of money.",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "The smaller the government, the freer the people.",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "The government should, at most, provide emergency services, law enforcement, and free education.",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "State schools are a bad idea because our state shouldn't be influencing our children.",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "Do you like that any person from another country is naturalized?",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "Do you like to learn languages other than your language?",
        "effects": {
            "auth": -1
        }
    },
    {
        "question": "Should the locals be armed?",
        "effects": {
            "auth": -1,
            "right": 0.5
        }
    },
    {
        "question": "Tariffs on international trade are important to encourage local production.",
        "effects": {
            "auth": 1,
            "right": -0.5
        }
    },
    {
        "question": "I support regional unions, such as the European Union.",
        "effects": {
            "auth": -0.5,
            "right": 0.5,
            "prog": 0.5
        }
    },
    {
        "question": "Churches should be taxed the same way other institutions are taxed.",
        "effects": {
            "right": -0.5,
            "prog": 0.5
        }
    },
    {
        "question": "Do you support gender equality and human rights?",
        "effects": {
            "auth": -0.5,
            "prog": 1
        }
    },
    {
        "question": "Sex outside marriage is immoral.",
        "effects": {
            "auth": 0.5,
            "prog": -1
        }
    },
    {
        "question": "Abortion should be prohibited in most or all cases.",
        "effects": {
            "auth": 1,
            "prog": -1
        }
    },
    {
        "question": "Prostitution should be illegal.",
        "effects": {
            "auth": 0.5,
            "prog": -1
        }
    },
    {
        "question": "All people - regardless of factors like culture, sexuality, or economically - should be treated equally.",
        "effects": {
            "auth": -1,
            "right": -1,
            "prog": 1
        }
    },
    {
        "question": "Would you like immigrants and refugees to have the same rights as local citizens?",
        "effects": {
            "auth": -1,
            "prog": 1
        }
    },
    {
        "question": "Should any illegal immigrant and refugee be prevented from synchronizing any profession in the country, and should he be deported to his country upon arrival?",
        "effects": {
            "auth": 1,
            "right": 1
        }
    },
    {
        "question": "Inheritance is a legitimate form of wealth.",
        "effects": {
            "right": -1,
            "prog": -0.5
        }
    },
    {
        "question": "Two consenting individuals should be able to do whatever they want with each other, even if it makes me uncomfortable.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "An individual's body is their own property, and they should be able to do anything they desire to it.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "A person should be able to worship whomever or whatever they want.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "In criminal justice, rehabilitation should be more important than punishment.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "A better world will come from automation, science, and technology.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "Animals deserve certain universal rights.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "Gender is a social construct, not a natural state of affairs.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "Laws based on cultural values, rather than ethical ones, aren't justice.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "Climate change is currently one of the greatest threats to our way of life.",
        "effects": {
            "prog": 1
        }
    },
    {
        "question": "My religious values should be spread as much as possible.",
        "effects": {
            "prog": -0.5
        }
    },
    {
        "question": "Homosexuality is against my values and same-sex marriage should not be legal.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "Transgender individuals should not be able to adopt children.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "Society was better many years ago than it is now.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "Drugs are harmful and should be banned.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "The death penalty should exist for certain crimes.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "One cannot be moral without religion.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "Parents should hold absolute power over their children, as they are older and more experienced.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "Children should be educated in religious or traditional values.",
        "effects": {
            "prog": -1
        }
    },
    {
        "question": "Multiculturalism is bad.",
        "effects": {
            "prog": -1
        }
    }
];