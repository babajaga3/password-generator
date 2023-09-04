import React from "react";
import { Box, Flex, Button, Text, useClipboard } from '@chakra-ui/react';

export function ResultComponent({password}) {

  const { hasCopied, onCopy } = useClipboard(password);

  return (
    <Flex fontFamily={"mono"} className='space-x-4' mt={"-10"}>
      <Box className="flex items-center justify-center" height='50px' width={"350px"} borderWidth='1px' borderRadius='lg' bgColor='gray.700' >
        <Text fontSize='25px' fontWeight='bold' >{password}</Text>
      </Box>
      <Button maxWidth={"90px"} height='50px' fontSize={"25px"} color='blackAlpha.700' bgColor={"purple.600"} shadow={"lg"} onClick={onCopy}>
        {hasCopied ? "Copied" : "Copy"}
      </Button>
    </Flex>
    
  )
}