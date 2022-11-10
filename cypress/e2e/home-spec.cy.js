const storiesStub = {
  results: [
    {
      section: "nyregion",
      subsection: "",
      title: "If Democrats Lose the House, They May Have New York to Blame",
      abstract:
        "Republicans flipped four congressional seats in New York, the most of any state in the country. How did this happen in one of the nation’s most liberal states?",
      url: "https://www.nytimes.com/2022/11/09/nyregion/new-york-republicans-house.html",
      byline: "By Nicholas Fandos",
      updated_date: "2022-11-09T20:18:43-05:00",
      published_date: "2022-11-09T19:05:39-05:00",
      multimedia: [
        {
          url: "https://static01.nyt.com/images/2022/11/09/nyregion/09ny-election1/09ny-election1-superJumbo.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/nyregion/09ny-election1/09ny-election1-threeByTwoSmallAt2X.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/nyregion/09ny-election1/09ny-election1-thumbLarge.jpg",
        },
      ],
    },
    {
      section: "us",
      subsection: "politics",
      title: "What Many Pennsylvanians Saw in Fetterman",
      abstract:
        "By reinventing his Senate campaign after a stroke, Lt. Gov. John Fetterman ended up connecting with voters who responded to his saga of loss and comeback.",
      url: "https://www.nytimes.com/2022/11/09/us/politics/fetterman-midterms-pennsylvania.html",
      byline: "By Trip Gabriel",
      updated_date: "2022-11-09T18:51:21-05:00",
      published_date: "2022-11-09T18:43:40-05:00",
      multimedia: [
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/09pol-fetterman-1-7e4a/09pol-fetterman-1-7e4a-superJumbo.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/09pol-fetterman-1-7e4a/09pol-fetterman-1-7e4a-threeByTwoSmallAt2X.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/09pol-fetterman-1-7e4a/09pol-fetterman-1-7e4a-thumbLarge.jpg",
        },
      ],
    },
    {
      section: "us",
      subsection: "politics",
      title: "Election Denial Didn’t Play as Well as Republicans Hoped",
      abstract:
        "Democrats won races for top election posts in several political battlegrounds where their Republican rivals had cast doubt on the 2020 contest and signaled their desire to overhaul voting systems.",
      url: "https://www.nytimes.com/2022/11/09/us/politics/trump-election-candidates-voting.html",
      byline: "By Nick Corasaniti, Reid J. Epstein and Jonathan Weisman",
      updated_date: "2022-11-09T18:29:50-05:00",
      published_date: "2022-11-09T13:58:51-05:00",
      multimedia: [
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/00pol-democracy-whitmer-1-be11/00pol-democracy-whitmer-1-be11-superJumbo.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/00pol-democracy-whitmer-1-be11/00pol-democracy-whitmer-1-be11-threeByTwoSmallAt2X.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/00pol-democracy-whitmer-1-be11/00pol-democracy-whitmer-1-be11-thumbLarge.jpg",
        },
      ],
    },
  ]
};

const usStub = {
  results: [
    {
      section: "us",
      subsection: "politics",
      title: "What Many Pennsylvanians Saw in Fetterman",
      abstract:
        "By reinventing his Senate campaign after a stroke, Lt. Gov. John Fetterman ended up connecting with voters who responded to his saga of loss and comeback.",
      url: "https://www.nytimes.com/2022/11/09/us/politics/fetterman-midterms-pennsylvania.html",
      byline: "By Trip Gabriel",
      updated_date: "2022-11-09T18:51:21-05:00",
      published_date: "2022-11-09T18:43:40-05:00",
      multimedia: [
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/09pol-fetterman-1-7e4a/09pol-fetterman-1-7e4a-superJumbo.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/09pol-fetterman-1-7e4a/09pol-fetterman-1-7e4a-threeByTwoSmallAt2X.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/09pol-fetterman-1-7e4a/09pol-fetterman-1-7e4a-thumbLarge.jpg",
        },
      ],
    },
    {
      section: "us",
      subsection: "politics",
      title: "Election Denial Didn’t Play as Well as Republicans Hoped",
      abstract:
        "Democrats won races for top election posts in several political battlegrounds where their Republican rivals had cast doubt on the 2020 contest and signaled their desire to overhaul voting systems.",
      url: "https://www.nytimes.com/2022/11/09/us/politics/trump-election-candidates-voting.html",
      byline: "By Nick Corasaniti, Reid J. Epstein and Jonathan Weisman",
      updated_date: "2022-11-09T18:29:50-05:00",
      published_date: "2022-11-09T13:58:51-05:00",
      multimedia: [
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/00pol-democracy-whitmer-1-be11/00pol-democracy-whitmer-1-be11-superJumbo.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/00pol-democracy-whitmer-1-be11/00pol-democracy-whitmer-1-be11-threeByTwoSmallAt2X.jpg",
        },
        {
          url: "https://static01.nyt.com/images/2022/11/09/multimedia/00pol-democracy-whitmer-1-be11/00pol-democracy-whitmer-1-be11-thumbLarge.jpg",
        },
      ],
    }
  ]
}

describe("home page", () => {

  beforeEach(() => {
    cy.intercept("GET", "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GCXn99IPsMTIYfrN5dBTi40fbXNtMGSv", storiesStub)
    .visit("http://localhost:3000");
  });

  it("should be able to see the Header", () => {
    cy.get('.header').contains('New York Times - Top Stories')
  });

  it("should be able to see the dropdown menu to filter stories", () => {
    cy.get('.dropdown').should('be.visible')
  })

  it("should be able to see a list of story cards, each with an image, title, section, published date, and a button to view that story's details", () => {
    cy.get('.cards-container').children().should('have.length', 3)
    .get('.story-img-small').should('be.visible')
    .get('.story-title').contains('If Democrats Lose the House, They May Have New York to Blame')
    .get('.story-section').contains('NY Region')
    .get('.story-pub-date').contains('Published: Nov 9, 2022, 5:05 PM')
    .get('.story-details-btn').should('be.visible')
  })

  it("should be able to select an option from the dropdown menu, and the listed articles should automatically update", () => {
    cy.intercept("GET", "https://api.nytimes.com/svc/topstories/v2/us.json?api-key=GCXn99IPsMTIYfrN5dBTi40fbXNtMGSv", usStub)
    .get('.dropdown-select').select('US')
    .get('.cards-container').children().should('have.length', 2)
    .get('.story-card').should('be.visible')
    .get('.story-title').contains('What Many Pennsylvanians Saw in Fetterman')
  })

  it("should be able to click on the Story Details button to navigate to a page that displays the details for that story", () => {
    cy.get('.story-details-btn').first().click()
    .get('.full-details-container').should('be.visible')
  })

  it("should be able to see the details of the story, including the title, author, published and updated dates, section, abstract, image, link to the article on the NY times website, and a button to return to the home page", () => {
    cy.get('.story-details-btn').first().click()
    .get('.full-details-container').should('be.visible')
    .get('.title').contains('If Democrats Lose the House, They May Have New York to Blame')
    .get('.byline').contains('By Nicholas Fandos')
    .get('.date').first().contains('Published: Nov 9, 2022, 5:05 PM')
    .get('.date').next().contains('Updated: Nov 9, 2022, 6:18 PM')
    .get('.section').contains('NY Region')
    .get('.abstract').contains("Republicans flipped four congressional seats in New York, the most of any state in the country. How did this happen in one of the nation’s most liberal states?")
    .get('.image').should('be.visible')
    .get('.link').contains('See Full Article')
    .get('.home-button').should('be.visible')
  })

  it('should be able to click on the Return to Home button to navigate back to the home page', () => {
    cy.get('.story-details-btn').first().click()
    .get('.home-button').click()
    .get('.cards-container').should('be.visible')
  })
});
