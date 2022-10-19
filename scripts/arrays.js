console.log(data);
// 1. instead of creating the cards manually, we should use array functions to convert the data into cards
const courseToCard = ({
  prefix,
  number,
  title,
  url,
  desc,
  prereqs,
  credits
}) => {
  const prereqLinks = prereqs.map(
  (prereq) => `<a href="#" class="card-link">${prereq}</a>`
  ).join();
  const courseTemplate = `<div class="col">
            <div class="card" style="width: 18rem;">
              <h3 class="card-header">${title}</h3>
              <div class="card-body">
                <h5 class="card-title">${prefix} ${number}</h5>
                <p class="card-text">${desc}</p>
                <dl><dt>Prereqs</dt>
                ${prereqLinks}                
              </div>
            </div>
          </div>`;
  return courseTemplate;
  
};

const courseCards = data.items.map(courseToCard);
courseCards.forEach((c) => document.write(c));
// console.log(courseCards);
// document.write(courseCards.join(''))
// 2. maybe we only show those that match the search query?
const filterCourseCard = (markup, query) => {
  console.log(markup, query);
  return markup.toLowerCase().includes(query.toLowerCase());
};

const searchButton = document.getElementById("search-btn")
searchButton.addEventListener("click", (ev) => {
  console.log(ev)
  ev.preventDefault();
  console.log("query text")
  const searchField = document.querySelector('input[type="query-text"]');
  const queryText = searchField.value;
  console.log(queryText)

  const filteredCourseCards = courseCards.filter((card) =>
    filterCourseCard(card, queryText)
  );

  console.log('filteredCourseCards', filteredCourseCards);
  filteredCourseCards.forEach((card) => {
    document.write(card);
  });
});


// 3. we update the result count and related summary info as we filter
