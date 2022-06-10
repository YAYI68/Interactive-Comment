import React from 'react';
import { Box,EditBox,DeleteIcon,EditIcon,
    EditWord} from './index.js';


const EditButton = ({delete:del}) => {
    return (
        <div>
              <Box>
                <EditBox onClick={del}>
                 <DeleteIcon />
                 <EditWord color="red" >Delete</EditWord>
                </EditBox>
                <EditBox>
                <EditIcon />
                 <EditWord color="blue" >Edit</EditWord>
                </EditBox> 
            </Box>
        </div>
    )
}

export default EditButton
