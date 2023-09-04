import React from 'react';
import pass from 'generate-password-browser';
import { ResultComponent } from '../ResultComponent';
import { 
  Box, 
  CheckboxGroup, 
  Checkbox, 
  Stack, 
  useBoolean,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  IconButton,
  Tooltip,
  Text
} from '@chakra-ui/react';

import { RepeatIcon } from '@chakra-ui/icons';


export function MainComponent() { 
  
  const [numCheck, setNumCheck] = useBoolean(true);
  const [capCheck, setCapCheck] = useBoolean(true);
  const [symCheck, setSymCheck] = useBoolean(false);
  const [simCharCheck, setSimChar] = useBoolean(false);
  const [showTooltip, setShowTooltip] = useBoolean(false);
  const [length, setLength] = React.useState(10);
  
  function getNewPass() {
    let pass1 = pass.generate({
      length: length,
      symbols: symCheck,
      numbers: numCheck,
      uppercase: capCheck,
      excludeSimilarCharacters: simCharCheck
    });

    return pass1;
  };
  
  function getPass() {
    let pass1 = pass.generate({
      length: length,
      symbols: symCheck,
      numbers: numCheck,
      uppercase: capCheck,
      excludeSimilarCharacters: simCharCheck
    });

    return pass1;
  };

  let password = getPass();

  return(
    <div>
      <ResultComponent password={password} />
      <br></br>
      <Box fontFamily={"mono"} className='flex items-center justify-center space-x-3' borderWidth={"1px"} borderRadius={"lg"} height={"80px"} width={"459px"} bgColor={"gray.700"}>
        <CheckboxGroup colorScheme='green' defaultValue={['numbers', 'capitals']}>
          <Stack spacing={[1, 5]} direction={['column', 'row']}>
            <Checkbox onChange={setNumCheck.toggle} value='numbers'>Numbers</Checkbox>
            <Checkbox onChange={setCapCheck.toggle} value='capitals'>Capitals</Checkbox>
            <Checkbox onChange={setSymCheck.toggle} value='symbols'>Symbols</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Box>
      <br></br>
      <Box fontFamily={"mono"} className=' flex space-x-3 items-center justify-center' borderWidth={"1px"} borderRadius={"lg"} height={"80px"} width={"459px"} bgColor={"gray.700"}>
      <Text mr={"17px"}>Length</Text>

      <Slider onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} size={"lg"} marginLeft={"100px"} width={"250px"} aria-label='slider-ex-1' defaultValue={13} max={20} min={5} onChangeEnd={(val) => setLength(val)}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement={"top"}
        isOpen={showTooltip}
        label={`${length} %`}>
          <SliderThumb />
        </Tooltip>
      </Slider>
      </Box>
      <br></br>
      <IconButton 
        colorScheme={"blue"}
        onClick={password = getNewPass()}
        icon={<RepeatIcon color={"black"} />}
      />
    </div>
  )

  
}