const characters = [
    {
      name: "Spooky Ghost",
      skillTalents: [
        { unlock: "Normal Attack", description: "Boo! Here's a spooky pumpkin 🎃" },
        { unlock: "Elemental Skill", description: "You get a bag of candy 🍬" }
      ]
    },
    {
      name: "Wicked Witch",
      skillTalents: [
        { unlock: "Elemental Burst", description: "A broomstick ride! 🧹" },
        { unlock: "Normal Attack", description: "A ghostly greeting 👻" }
      ]
    }
  ];
  
  const maps = {
    'Normal Attack': 'NORMAL_ATTACK',
    'Attaque normale': 'NORMAL_ATTACK',
    'Elemental Skill': 'ELEMENTAL_SKILL',
    'Compétence élémentaire': 'ELEMENTAL_SKILL',
    'Elemental Burst': 'ELEMENTAL_BURST',
    'Déchainement élémentaire': 'ELEMENTAL_BURST',
  };
  
  characters.forEach(character => {
    if (character.skillTalents) {
      character.skillTalents.forEach(skill => {
        if (maps[skill.unlock]) {
          skill.type = maps[skill.unlock];
        }
      });
    }
  });
  
  const characterContainer = document.getElementById('character-container');
  
  characters.forEach(character => {
    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');
    characterDiv.innerHTML = `<h2>${character.name}</h2>`;
  
    character.skillTalents.forEach(skill => {
      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill');
      skillDiv.innerText = `${skill.unlock}: Click to receive a gift!`;
      
      skillDiv.addEventListener('click', () => {
        alert(skill.description);
      });
  
      characterDiv.appendChild(skillDiv);
    });
  
    characterContainer.appendChild(characterDiv);
  });
  
  console.log("Processed Character Data:", JSON.stringify(characters, null, 2));
  