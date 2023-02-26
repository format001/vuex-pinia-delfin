import { createDelfin } from '@/delfin/index.js'
import counter from './counter'
import calculator from './calculator.js'
export default createDelfin({
    counter,
    calculator
})