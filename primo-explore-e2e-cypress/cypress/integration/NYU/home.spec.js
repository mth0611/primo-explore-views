describe('The Home Page', function () {
  before(() => {
    cy.visit('/search?vid=NYU') // change URL to match your dev URL
  })

  it('successfully loads', function () {
    cy.get('#searchBar')
      .should('exist')
  })

  describe('Using BobCat', () => {
    [
      'Books & More',
      'Articles & Databases',
      'Course Reserves'
    ].forEach(infoText => {
      it(`includes information about: ${infoText}`, () => {
        cy.get('[data-cy=home-using-bobcat]').then($card => {
          const text = $card.text()
            expect(text).to.include(infoText)
          })
        })
    })
  })

  describe('Need Help?', () => {
    const links = {
      ["Ask a librarian"]: `https://library.nyu.edu/ask`,
      ["Facebook"]: `https://www.facebook.com/NYULibraries/`,
      ["Twitter"]: `https://twitter.com/nyulibraries`,
      ["Explore our services"]: `https://library.nyu.edu/services/`,
      ["BobCat FAQs"]: `http://library.answers.nyu.edu/friendly.php?slug=website/search&q=bobcat&t=0`,
    }

    Object.entries(links).forEach(([text, href]) => {
      it(`includes information about: ${text}`, () => {
        cy.get(`[data-cy=home-need-help]`)
          .contains(text)
          .should('have.attr', 'href', href)
      })
    })
  })

  describe('Additional Options', () => {
    const links = {
      ["Bobcat Standard (Classic Catalog)"]: `https://aleph.library.nyu.edu`,
      ["Request a book from E-ZBorrow"]: `https://login.library.nyu.edu/ezborrow/nyu`,
      ["Search WorldCat for items in nearby libraries"]: `http://www.worldcat.org/search?qt=worldcat_org_all`,
    }

    Object.entries(links).forEach(([text, href]) => {
      it(`includes information about: ${text}`, () => {
        cy.get(`[data-cy=home-additional-options]`)
          .contains(text)
          .should('have.attr', 'href', href)
      })
    })
  })
})