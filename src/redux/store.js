import { createStore } from 'redux';

const initialState = {
  players: [],
  feed: [
  {
    "id": "744dd829-83e0-443a-8edb-936771eacdee",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 1
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "i made fries",
    "nuts": 396,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:13:27",
    "type": 29
  },
  {
    "id": "fec3a81c-5ae6-4c9a-bb4c-8e85f9d951a0",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 1
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "what's happening",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:12:23",
    "type": 29
  },
  {
    "id": "141e2e4b-345c-442c-b772-434fc63bc0e0",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 1
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "uh",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:12:06",
    "type": 29
  },
  {
    "id": "0c63495b-49ae-40c8-95df-8cad8298706f",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 3
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "bet the under",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:11:26",
    "type": 29
  },
  {
    "id": "65e976e3-764d-4009-b7f9-1519908d20d5",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 3
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "going down",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:10:58",
    "type": 29
  },
  {
    "id": "3423f68f-825b-417e-94d6-ca4d77903977",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 3
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "over taken",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:10:14",
    "type": 29
  },
  {
    "id": "6b205917-e5c9-4250-92d2-9939efd9f581",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "We'll win.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:09:38",
    "type": 29
  },
  {
    "id": "b2fca112-87df-4701-8c0c-cbad74ace31c",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "Together, We'll fix this.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:09:12",
    "type": 29
  },
  {
    "id": "8ed8e0ac-671e-4443-877d-4b5395a5aa80",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "You were misled.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:08:45",
    "type": 29
  },
  {
    "id": "f41488ac-b140-4f0e-8d9f-436c53ed1f43",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "This isn't your fault.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:08:00",
    "type": 29
  },
  {
    "id": "9fafc5de-b43b-40a3-bb61-83f220b18b6f",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "We're not angry.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:07:17",
    "type": 29
  },
  {
    "id": "d9e77dce-4a0e-405f-91ca-57e55f5c9640",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "Don't worry",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:06:24",
    "type": 29
  },
  {
    "id": "e5d5b453-82bf-4606-844f-652ab247e798",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "We may suffer Losses.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:06:02",
    "type": 29
  },
  {
    "id": "fc1d6efa-dc34-41c4-96ce-c08688783173",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "This will surely Tank the Ratings.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:05:23",
    "type": 29
  },
  {
    "id": "cff3c660-1bd8-4d2e-b857-481ac96e1e63",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "Today's Results are disappointing.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:04:32",
    "type": 29
  },
  {
    "id": "61b0a27d-72e7-46e7-a3b2-59300967ad86",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "We won't deny it.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:04:00",
    "type": 29
  },
  {
    "id": "0f6cc9aa-79fc-4573-a1ad-478397a3e45b",
    "playerTags": [
      ""
    ],
    "teamTags": [
      ""
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "being": 2
    },
    "season": "17",
    "tournament": "-1",
    "day": 113,
    "phase": 13,
    "category": 4,
    "description": "Well then",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      ""
    ],
    "created": "2021-05-16T18:02:57",
    "type": 29
  },
  {
    "id": "0469e50b-e382-49a6-9e6c-c4eec070500e",
    "playerTags": [
      "5e4dfa16-f1b9-400f-b8ef-a1613c2b026a"
    ],
    "teamTags": [
      "bfd38797-8404-4b38-8b82-341da28b1f83"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "type": 4,
      "after": "3.533502454999488",
      "before": "3.282570999653375"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Snyder Briggs is Partying!",
    "nuts": 0,
    "playerNames": [
      "Snyder Briggs"
    ],
    "teamNames": [
      "Charleston Shoe Thieves"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 117
  },
  {
    "id": "6a266b10-3aa8-4edd-a716-ad65fd6214ba",
    "playerTags": [
      "198fd9c8-cb75-482d-873e-e6b91d42a446"
    ],
    "teamTags": [
      "bfd38797-8404-4b38-8b82-341da28b1f83"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "type": 4,
      "after": "2.1683499158975947",
      "before": "1.929778283384036"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Ren Hunter is Partying!",
    "nuts": 0,
    "playerNames": [
      "Ren Hunter"
    ],
    "teamNames": [
      "Charleston Shoe Thieves"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 117
  },
  {
    "id": "907fed24-cf7f-4795-bde1-7060b3968bae",
    "playerTags": [
      "30218684-7fa1-41a5-a3b3-5d9cd97dd36b"
    ],
    "teamTags": [
      "bfd38797-8404-4b38-8b82-341da28b1f83"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "type": 4,
      "after": "3.8914639329887915",
      "before": "3.6391936041697344"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Jor--n Hildeb-r- is Partying!",
    "nuts": 0,
    "playerNames": [
      "Jordan Hildebert"
    ],
    "teamNames": [
      "Charleston Shoe Thieves"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 117
  },
  {
    "id": "903c8b3b-a976-4072-9ce8-5adffce6da1f",
    "playerTags": [
      "2859166d-6aed-4262-b05b-db85c49b3391"
    ],
    "teamTags": [
      "bfd38797-8404-4b38-8b82-341da28b1f83"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "type": 4,
      "after": "2.2615198427044896",
      "before": "1.9876243617955467"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Donna Milicic is Partying!",
    "nuts": 0,
    "playerNames": [
      "Donna Milicic"
    ],
    "teamNames": [
      "Charleston Shoe Thieves"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 117
  },
  {
    "id": "c68170ca-6a98-44f8-a82c-a8c592f6cd90",
    "playerTags": [
      "46721a07-7cd2-4839-982e-7046df6e8b66"
    ],
    "teamTags": [
      "bfd38797-8404-4b38-8b82-341da28b1f83",
      "bb4a9de5-c924-4923-a0cb-9d1445f1ee5d"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "location": 0,
      "playerId": "46721a07-7cd2-4839-982e-7046df6e8b66",
      "playerName": "Stew Briggs",
      "sendTeamId": "bfd38797-8404-4b38-8b82-341da28b1f83",
      "sendTeamName": "Shoe Thieves",
      "receiveTeamId": "bb4a9de5-c924-4923-a0cb-9d1445f1ee5d",
      "receiveLocation": 0,
      "receiveTeamName": "Worms"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Stew Briggs roamed to a new team.",
    "nuts": 0,
    "playerNames": [
      "Stew Briggs"
    ],
    "teamNames": [
      "Charleston Shoe Thieves",
      "Ohio Worms"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 115
  },
  {
    "id": "fe8c0bea-430e-4a87-aeb2-b5815db4afab",
    "playerTags": [
      "99766c1b-c590-4261-b1b7-3e9c7fc35608"
    ],
    "teamTags": [
      "57ec08cc-0411-4643-b304-0e80dbc15ac7",
      "9debc64f-74b7-4ae1-a4d6-fce0144b6ea5"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "location": 0,
      "playerId": "99766c1b-c590-4261-b1b7-3e9c7fc35608",
      "playerName": "Jasper Blather",
      "sendTeamId": "57ec08cc-0411-4643-b304-0e80dbc15ac7",
      "sendTeamName": "Wild Wings",
      "receiveTeamId": "9debc64f-74b7-4ae1-a4d6-fce0144b6ea5",
      "receiveLocation": 0,
      "receiveTeamName": "Spies"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Jasper Blather roamed to a new team.",
    "nuts": 0,
    "playerNames": [
      "Jasper Blather"
    ],
    "teamNames": [
      "Mexico City Wild Wings",
      "Houston Spies"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 115
  },
  {
    "id": "dd8648f3-ed71-4f6a-9cbb-af2191871bbc",
    "playerTags": [
      "2c4b2a6d-9961-4e40-882c-a338f4e72117"
    ],
    "teamTags": [
      "ca3f1c8c-c025-4d8e-8eef-5be6accbeb16",
      "7966eb04-efcc-499b-8f03-d13916330531"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "location": 0,
      "playerId": "2c4b2a6d-9961-4e40-882c-a338f4e72117",
      "playerName": "Evelton McBlase II",
      "sendTeamId": "ca3f1c8c-c025-4d8e-8eef-5be6accbeb16",
      "sendTeamName": "Firefighters",
      "receiveTeamId": "7966eb04-efcc-499b-8f03-d13916330531",
      "receiveLocation": 0,
      "receiveTeamName": "Magic"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Evelton McBlase II roamed to a new team.",
    "nuts": 0,
    "playerNames": [
      "Evelton McBlase II"
    ],
    "teamNames": [
      "Chicago Firefighters",
      "Yellowstone Magic"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 115
  },
  {
    "id": "4383711c-f3dc-4bec-a5f2-98647e53d641",
    "playerTags": [
      "c1dddfc5-6ad6-4b31-9e52-98236c533876"
    ],
    "teamTags": [
      "eb67ae5e-c4bf-46ca-bbbc-425cd34182ff"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "DUST",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "York Silk III faded to dust.",
    "nuts": 0,
    "playerNames": [
      "York Silk III"
    ],
    "teamNames": [
      "Canada Moist Talkers"
    ],
    "created": "2021-05-16T18:01:19",
    "type": 106
  },
  {
    "id": "3d9aebf5-4dc6-49ee-b49d-ffd2426d3b8f",
    "playerTags": [
      "c1dddfc5-6ad6-4b31-9e52-98236c533876"
    ],
    "teamTags": [
      "eb67ae5e-c4bf-46ca-bbbc-425cd34182ff"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "teamId": "eb67ae5e-c4bf-46ca-bbbc-425cd34182ff",
      "playerId": "c1dddfc5-6ad6-4b31-9e52-98236c533876",
      "teamName": "Moist Talkers",
      "playerName": "York Silk III"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "York Silk III faded away from the Moist Talkers.",
    "nuts": 0,
    "playerNames": [
      "York Silk III"
    ],
    "teamNames": [
      "Canada Moist Talkers"
    ],
    "created": "2021-05-16T18:01:18",
    "type": 112
  },
  {
    "id": "4c15f73e-0753-4f24-9cef-98f610c8ebc1",
    "playerTags": [
      "c817c6cc-8574-4857-83f1-4a311fa89258"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "DUST",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Chorby Soul IV faded to dust.",
    "nuts": 0,
    "playerNames": [
      "Chorby Soul IV"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:18",
    "type": 106
  },
  {
    "id": "32cc43c7-bf60-48d9-a5c5-e8768512583b",
    "playerTags": [
      "c817c6cc-8574-4857-83f1-4a311fa89258"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "teamId": "36569151-a2fb-43c1-9df7-2df512424c82",
      "playerId": "c817c6cc-8574-4857-83f1-4a311fa89258",
      "teamName": "Millennials",
      "playerName": "Chorby Soul IV"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Chorby Soul IV faded away from the Millennials.",
    "nuts": 0,
    "playerNames": [
      "Chorby Soul IV"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:17",
    "type": 112
  },
  {
    "id": "2f43e34e-c254-47ca-b36a-1919c416528c",
    "playerTags": [
      "98d233de-9c3f-4100-a343-5297b7fdeb92"
    ],
    "teamTags": [
      "bb4a9de5-c924-4923-a0cb-9d1445f1ee5d"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "DUST",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "York Silk II faded to dust.",
    "nuts": 0,
    "playerNames": [
      "York Silk II"
    ],
    "teamNames": [
      "Ohio Worms"
    ],
    "created": "2021-05-16T18:01:17",
    "type": 106
  },
  {
    "id": "2ad6b3e8-08da-4730-988d-081a520b89af",
    "playerTags": [
      "98d233de-9c3f-4100-a343-5297b7fdeb92"
    ],
    "teamTags": [
      "bb4a9de5-c924-4923-a0cb-9d1445f1ee5d"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "teamId": "bb4a9de5-c924-4923-a0cb-9d1445f1ee5d",
      "playerId": "98d233de-9c3f-4100-a343-5297b7fdeb92",
      "teamName": "Worms",
      "playerName": "York Silk II"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "York Silk II faded away from the Worms.",
    "nuts": 0,
    "playerNames": [
      "York Silk II"
    ],
    "teamNames": [
      "Ohio Worms"
    ],
    "created": "2021-05-16T18:01:16",
    "type": 112
  },
  {
    "id": "20d75868-bf0f-48d7-9b88-c420261bd50c",
    "playerTags": [
      "f3561c54-11c3-4b3d-9182-85386471b2eb"
    ],
    "teamTags": [
      "3f8bbb15-61c0-4e3f-8e4a-907a5fb1565e"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "DUST",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Nagomi Mcdaniel II faded to dust.",
    "nuts": 0,
    "playerNames": [
      "Nagomi Mcdaniel II"
    ],
    "teamNames": [
      "Boston Flowers"
    ],
    "created": "2021-05-16T18:01:13",
    "type": 106
  },
  {
    "id": "686531e7-9d0d-4326-a730-b88ccb8d577e",
    "playerTags": [
      "f3561c54-11c3-4b3d-9182-85386471b2eb"
    ],
    "teamTags": [
      "3f8bbb15-61c0-4e3f-8e4a-907a5fb1565e"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "teamId": "3f8bbb15-61c0-4e3f-8e4a-907a5fb1565e",
      "playerId": "f3561c54-11c3-4b3d-9182-85386471b2eb",
      "teamName": "Flowers",
      "playerName": "Nagomi Mcdaniel II"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Nagomi Mcdaniel II faded away from the Flowers.",
    "nuts": 0,
    "playerNames": [
      "Nagomi Mcdaniel II"
    ],
    "teamNames": [
      "Boston Flowers"
    ],
    "created": "2021-05-16T18:01:08",
    "type": 112
  },
  {
    "id": "9f8fe09d-ad18-4e53-a75d-4db2a6564c7c",
    "playerTags": [
      "fb9bedb4-9c8b-4520-a062-23fba0d5f05f"
    ],
    "teamTags": [
      "d9f89a8a-c563-493e-9d64-78e4f9a55d4a"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "DUST",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Nagomi Mcdaniel III faded to dust.",
    "nuts": 0,
    "playerNames": [
      "Nagomi Mcdaniel III"
    ],
    "teamNames": [
      "Atlantis Georgias"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 106
  },
  {
    "id": "ead0b542-3f67-4348-88e3-89989a7d1767",
    "playerTags": [
      "fb9bedb4-9c8b-4520-a062-23fba0d5f05f"
    ],
    "teamTags": [
      "d9f89a8a-c563-493e-9d64-78e4f9a55d4a"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "teamId": "d9f89a8a-c563-493e-9d64-78e4f9a55d4a",
      "playerId": "fb9bedb4-9c8b-4520-a062-23fba0d5f05f",
      "teamName": "Georgias",
      "playerName": "Nagomi Mcdaniel III"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Nagomi Mcdaniel III faded away from the Georgias.",
    "nuts": 0,
    "playerNames": [
      "Nagomi Mcdaniel III"
    ],
    "teamNames": [
      "Atlantis Georgias"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 112
  },
  {
    "id": "472d324e-c588-426b-a286-aa7d4bf1be2d",
    "playerTags": [
      ""
    ],
    "teamTags": [
      "105bc3ff-1320-4e37-8ef0-8d595cb95dd0"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "FREE_WILL",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "The Garages used their Free Will.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      "Seattle Garages"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 107
  },
  {
    "id": "2572a9c8-6e6c-4a24-956e-b63b0a13cbab",
    "playerTags": [
      ""
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "FREE_WILL",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "The Millennials used their Free Will.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 107
  },
  {
    "id": "15dd2324-84fd-4f40-9290-10ecfe7ff1fd",
    "playerTags": [
      ""
    ],
    "teamTags": [
      "ca3f1c8c-c025-4d8e-8eef-5be6accbeb16"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "FREE_WILL",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "The Firefighters used their Free Will.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      "Chicago Firefighters"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 107
  },
  {
    "id": "297288f2-9b30-4c51-895e-85c1d810d323",
    "playerTags": [
      ""
    ],
    "teamTags": [
      "a37f9158-7f82-46bc-908c-c9e2dda7c33b"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "mod": "FREE_WILL",
      "type": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "The Jazz Hands used their Free Will.",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      "Breckenridge Jazz Hands"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 107
  },
  {
    "id": "bfb2580c-5d51-42b1-9622-adbe5d073fa3",
    "playerTags": [
      "ec68845f-3b26-412f-8446-4fef34e09c77"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "type": 22,
      "after": "0.2934887633616388",
      "before": "0.2134887633616388",
      "parent": "8e53de78-bb74-47b5-8a57-583958b15e6d"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Nandy Fantastic's Tenaciousness was improved by 8%.",
    "nuts": 0,
    "playerNames": [
      "Nandy Fantastic"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 179
  },
  {
    "id": "13a80dee-1464-422d-a160-5dea9163d7b0",
    "playerTags": [
      "c817c6cc-8574-4857-83f1-4a311fa89258"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "type": 22,
      "after": "0.2347892867322402",
      "before": "0.15478928673224018",
      "parent": "8e53de78-bb74-47b5-8a57-583958b15e6d"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Chorby Soul IV's Tenaciousness was improved by 8%.",
    "nuts": 0,
    "playerNames": [
      "Chorby Soul IV"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 179
  },
  {
    "id": "fa841b58-48d3-47fd-8932-6b2f6e4f996a",
    "playerTags": [
      "c817c6cc-8574-4857-83f1-4a311fa89258"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "type": 22,
      "after": "0.15478928673224018",
      "before": "0.07478928673224017",
      "parent": "8e53de78-bb74-47b5-8a57-583958b15e6d"
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Chorby Soul IV's Tenaciousness was improved by 8%.",
    "nuts": 0,
    "playerNames": [
      "Chorby Soul IV"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 179
  },
  {
    "id": "8e53de78-bb74-47b5-8a57-583958b15e6d",
    "playerTags": [
      ""
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "id": "tenacity_patches_3",
      "title": "Tenacity Patches",
      "votes": 66250,
      "teamId": "36569151-a2fb-43c1-9df7-2df512424c82",
      "children": [
        "fa841b58-48d3-47fd-8932-6b2f6e4f996a",
        "13a80dee-1464-422d-a160-5dea9163d7b0",
        "bfb2580c-5d51-42b1-9622-adbe5d073fa3"
      ],
      "teamName": "Millennials",
      "totalVotes": 500436,
      "highestTeam": "8d87c468-699a-47a8-b40d-cfb73a5660ad",
      "highestVotes": 187058
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 3,
    "description": "Blessing Won: Tenacity Patches, Millennials",
    "nuts": 0,
    "playerNames": [
      ""
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 60
  },
  {
    "id": "3d050b9e-dfe0-4620-a757-801e69c6e1a3",
    "playerTags": [
      "5c6cce63-99b3-441d-90e0-0664e68057a6"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "77c2900e-7314-42ee-a3cf-dddf84b4f284",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Cap",
      "playerRating": "2.076722376472185",
      "playerItemRatingAfter": "0.053754623997481266",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Ezekiel Throckmorton gained Cap.",
    "nuts": 0,
    "playerNames": [
      "Ezekiel Throckmorton"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  },
  {
    "id": "a07203a8-12da-446a-be32-615775fe0a8c",
    "playerTags": [
      "cc113432-5f9b-46f8-9745-09f999d51801"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "f70aaae8-d427-4774-a34f-352c4e7b3aeb",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Cap",
      "playerRating": "1.4644150369558897",
      "playerItemRatingAfter": "0.018328542216978494",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Reggie Canberra gained Cap.",
    "nuts": 0,
    "playerNames": [
      "Reggie Canberra"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  },
  {
    "id": "3018c784-1d59-4c2b-9248-be5acea5914f",
    "playerTags": [
      "c4951cae-0b47-468b-a3ac-390cc8e9fd05"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "eaee4ca6-2c09-4b7d-bd91-bf78a2fe55c5",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Cap",
      "playerRating": "1.2110552151103968",
      "playerItemRatingAfter": "0.056707749490801096",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Timmy Vine gained Cap.",
    "nuts": 0,
    "playerNames": [
      "Timmy Vine"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  },
  {
    "id": "5d6ad973-b062-4030-87c3-77af16bfbbd4",
    "playerTags": [
      "b7cdb93b-6f9d-468a-ae00-54cbc324ee84"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "d74618aa-f288-4d0a-bb9c-ad29180128d1",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Glass Cap",
      "playerRating": "2.145593270226471",
      "playerItemRatingAfter": "0.014081087577881735",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Ruslan Duran gained Glass Cap.",
    "nuts": 0,
    "playerNames": [
      "Ruslan Duran"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  },
  {
    "id": "ebf51877-e624-4d35-a540-d2ac48858378",
    "playerTags": [
      "5c60f834-a133-4dc6-9c07-392fb37b3e6a"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "5011744f-df47-4cb5-a723-a845b9f6ff8f",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Cap",
      "playerRating": "1.34843880986758",
      "playerItemRatingAfter": "0.11858080660669049",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Ramirez Winters gained Cap.",
    "nuts": 0,
    "playerNames": [
      "Ramirez Winters"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  },
  {
    "id": "02467819-a7d6-4f0c-b160-801a9d6bb9f2",
    "playerTags": [
      "c4dec95e-78a1-4840-b209-b3b597181534"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "2f7e06cf-e26a-454a-9b95-99b91007f428",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Cap",
      "playerRating": "1.756059519158591",
      "playerItemRatingAfter": "0.08956840635925784",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Charlatan Seabright gained Cap.",
    "nuts": 0,
    "playerNames": [
      "Charlatan Seabright"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  },
  {
    "id": "f39f1549-3246-49b9-ae2c-2210f4885e87",
    "playerTags": [
      "1e229fe5-a191-48ef-a7dd-6f6e13d6d73f"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "fe7a3477-91d0-4560-a238-572e94ec1bf2",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Cap of Strength",
      "playerRating": "2.053106642466717",
      "playerItemRatingAfter": "0.10430917156343089",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Erickson Fischer gained Cap of Strength.",
    "nuts": 0,
    "playerNames": [
      "Erickson Fischer"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  },
  {
    "id": "626dc44b-e9c0-42b5-8fd3-f4ac99f9bbf3",
    "playerTags": [
      "94d772c7-0254-4f08-814c-f6fc58fcfb9b"
    ],
    "teamTags": [
      "36569151-a2fb-43c1-9df7-2df512424c82"
    ],
    "gameTags": [
      ""
    ],
    "metadata": {
      "itemId": "5158a4da-0646-47e4-838a-265bcea3a2f4",
      "parent": "52383376-a867-4bdc-8970-50d44672e60d",
      "itemName": "Hard Cap",
      "playerRating": "1.41271758726025",
      "playerItemRatingAfter": "None",
      "playerItemRatingBefore": 0
    },
    "season": "17",
    "tournament": "-1",
    "day": 115,
    "phase": 13,
    "category": 1,
    "description": "Fletcher Peck gained Hard Cap.",
    "nuts": 0,
    "playerNames": [
      "Fletcher Peck"
    ],
    "teamNames": [
      "New York Millennials"
    ],
    "created": "2021-05-16T18:01:06",
    "type": 127
  }
]
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case 'player/add':
      return {
        players: [...state.players, action.payload.playerId],
        ...state
      };
    case 'player/remove':
      return {
        players: state.players.filter((entry) => {
          return entry 
        }),
        ...state,
      };
    case 'player/feed':
      return {
        feed: [action.payload, ...state.feed],
        ...state
      };
    default:
      return state;
  }
}

const store = createStore(playerReducer);

export default store;
