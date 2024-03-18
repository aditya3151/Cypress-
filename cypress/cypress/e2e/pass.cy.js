// @ts-check
describe('todos API', () => {
    /**
     * @typedef {Object} Todo
     * @property {number} id
     * @property {string} task
     */
  
    /** @type {Todo[]} */
    const initialItems = [
      {
        'id': 1,
        'task': ' something',
      },
      {
        'id': 2,
        'task': 'write something',
      },
    ]
  
    const getItems = () => {
      return cy.request('http://localhost:3000/students')
      .its('body')
    }
  
    /** @type {(todo:Todo) => Cypress.Chainable} */
    const add = (item) => {
      return cy.request('POST', 'http://localhost:3000/students', item)
    }
    const deleteItem = (item) => {
      return cy.request('DELETE', `http://localhost:3000/students/${item.id}`)
    }
  
    const deleteAll = () => {
      return getItems()
      .each(deleteItem)
    }
  
    const reset = () => {
      deleteAll()
      initialItems.forEach(add)
    }
  
    beforeEach(reset)
    afterEach(reset)
  
    it('returns JSON', () => {
      cy.request('http://localhost:3000/students')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
    })
  
    it('loads 2 items', () => {
      cy.request('http://localhost:3000/students')
      .its('body')
      .should('have.length', 2)
    })
  
    it('loads the initial items', () => {
      getItems()
      .should('deep.eq', initialItems)
    })
  
    it('returns id + task objects', () => {
      getItems()
      .each((value) => {
        return expect(value).to.have.all.keys('id', 'task')
      })
    })
  
    it('adds an item', () => {
      const randomId = Cypress._.random(0, 10000)
      const item = { id: randomId, task: 'life' }
  
      add(item)
      cy.request(`http://localhost:3000/students/${randomId}`)
      .its('body')
      .should('deep.eq', item)
    })
  
    it('deletes an item', () => {
      const id = initialItems[0].id
  
      cy.request('DELETE', `http://localhost:3000/students/${id}`)
      getItems()
      .should('have.length', 1)
    })
  })