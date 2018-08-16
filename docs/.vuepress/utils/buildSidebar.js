module.exports.buildSection = function(base, sectionsToBuild) {
  const sectionTitles = Object.keys(sectionsToBuild)

  return sectionTitles.reduce(function(sections, title) {

    let directory = `${base}/${sectionTitle}`;

    let section = {
      title: deslugify(title),
      children: buildChildren(directory, sectionsToBuild[title])
    }

    sections.push(section)

    return sections;
  }, createSectionsArray(base))
}

module.exports.buildChildren = function(base, children) {
  return children.map(child => `${base}/${child}`);
}

function ucfirst(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}


// creates an array of sections for reduce accumulator
function createSectionsArray(base) {
  return [createHomeRoute(base)];
}

function createHomeRoute(base) {
  return [
    // the route base "/ark-cookbook"
    '/' + base,

    // the text of the route link "Ark Cookbook"
    deslugify(base) + " Home"  // TODO: abstract strings for localization
  ]
}

function deslugify(word) {
  return word.split("-").map(word => ucfirst(word)).join(" ")
}