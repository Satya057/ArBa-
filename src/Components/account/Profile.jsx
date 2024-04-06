import React, { useState } from 'react';
import { Box, Image, Stack, Text, Button } from '@chakra-ui/react';
import { ModalBox } from '../TermsAndCondition';

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdateProfile = () => {
    // Implement the logic for updating the profile here
    // For example, you can set the state to open the modal for updating the profile
    setIsModalOpen(true);
  };
  
  return (
    <Stack spacing={5}>
      <Box boxShadow={"md"} m={"auto"} mt={"4%"} w={"300px"} borderRadius={10}>
        <Box w={"100%"} borderRadius={10}>
          <Image w={"100%"} borderRadius={10} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqchhpDqTHjXT61lvvraMQJGDz-_DokaD1KsSnrtvX-Rz_QITPZg_emE5Phw_ttcvs1w&usqp=CAU'/>
        </Box>
        <Box p={2}>
          <Text>Username: moe_2314</Text>
          <Text>Email: useremai@123</Text>
          <Button variant="outline" colorScheme="teal" onClick={handleUpdateProfile}>Update Profile</Button>
        </Box>
      </Box>
      <Box>
        <ModalBox isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
      </Box>
    </Stack>
  );
}

export default Profile;
