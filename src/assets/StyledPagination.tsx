import { Pagination,styled } from "@mui/material";
 const StyledPagination = styled(Pagination)`

  border-radius: 20px;
  margin: 10px;

  
  .MuiPaginationItem-root {
    color: DeepSkyBlue;
    font-size: 30px;
  }

  .MuiPaginationItem-page.Mui-selected {

    background-color: DeepSkyBlue;
    color: white;

  }
  .MuiPaginationItem-root {
    
    border-radius: 100%;
    font-size: 1rem;
  }
`;
export default StyledPagination;