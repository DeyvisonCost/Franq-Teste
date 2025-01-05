import '@testing-library/jest-dom'
import { TextDecoder, TextEncoder } from 'util'

global.TextDecoder = TextDecoder as typeof TextDecoder
global.TextEncoder = TextEncoder as typeof TextEncoder
