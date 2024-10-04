import { Flex } from '@chakra-ui/react'
import * as components from './components'
export const Tips = () => {
    return (
        <Flex flexDirection={'column'} gap={2}>
            <components.Header />
            <components.BlogTable />
        </Flex>
    )
}
