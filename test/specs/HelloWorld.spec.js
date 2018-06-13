import test from 'tape'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld'

test('Mensagem precisa ser igual a esta', t => {
  t.plan(1)
  const msg = 'Welcome to Your Vue.js App'
  console.log(msg)
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg }
  })
  t.equal(wrapper.vm.$data.msg, msg);
})
