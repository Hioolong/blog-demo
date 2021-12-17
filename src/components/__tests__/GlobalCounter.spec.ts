import { mount } from "@cypress/vue"
import GlobalCounter from '../GlobalCOunter.vue'
import { createTestingPinia, TestingOptions } from '@pinia/testing'
import { useCounterStore } from '@/stores/counter'

describe('GlobalCounter', () => {
    function factory(options?: TestingOptions) {
        const wrapper = mount(GlobalCounter, {
          global: {
            plugins: [createTestingPinia(options)],
          }
        })
    
        const counter = useCounterStore()
    
        return { wrapper, counter }
    }
    it('can execute actions', () => {
        const { wrapper, counter } = factory({ stubActions: false })
        
        counter.increment()
        cy.get('button').contains('-').click()
    })

})