import { Flex, Divider } from '@chakra-ui/react'
import * as components from './components'
export const Blogs = () => {
    return (
        <Flex flexDirection={'column'} gap={2}>
            <components.Header />
            <components.BlogTable />
        </Flex>
    )
}
