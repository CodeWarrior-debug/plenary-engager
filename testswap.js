
let verses = "Nevertheless the LORD raised up judges, which delivered them out of the hand of those that spoiled them. And yet they would not hearken unto their judges, but they went a whoring after other gods, and bowed themselves unto them: they turned quickly out of the way which their fathers walked in, obeying the commandments of the LORD; but they did not so. And when the LORD raised them up judges, then the LORD was with the judge, and delivered them out of the hand of their enemies all the days of the judge: for it repented the LORD because of their groanings by reason of them that oppressed them and vexed them."
const originals = ["judge","raider"]
const replacers = ["tribal chieftain", "marauder"]



function swapItems(verses, originals, replacers) {
    let substitutionVerses = verses;

    for (let i = 0; i < originals.length; i++) {
      let replaced = originals[i];
      let replacer = replacers[i];
      const replaceFunc = new RegExp(replaced, "g");
      substitutionVerses = substitutionVerses.replace(replaceFunc, replacer);
    }
    console.log(substitutionVerses);
    // setVersesReword(substitutionVerses);
  }

  swapItems(verses, originals, replacers);