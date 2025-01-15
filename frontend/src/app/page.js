// // src/app/page.js
// import { Box, Typography, Button } from '@mui/material';
// import Link from 'next/link';

// const HomePage = () => {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#dfeff4' }}>
//       {/* Header */}
//       <Box sx={{ backgroundColor: '#33b8ff', color: 'white', padding: '20px', textAlign: 'center', fontSize: '32px', fontWeight: 'bold', borderRadius: '5px' }}>
//         Welcome to Course Helper
//       </Box>

//       {/* Main Section */}
//       <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
//         <Typography variant="h6" sx={{ marginBottom: '20px',color: 'black' }}>
//           Get ready to explore a variety of courses designed to enhance your skills.
//         </Typography>
//         {/* Button to navigate to Landing Page */}
//         <Link href="/landing" passHref>
//           <Button variant="contained" color="primary" sx={{ fontSize: '18px' }}>
//             Explore Courses
//           </Button>
//         </Link>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;


// src/app/page.js
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff',
        padding: '20px',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: '#007acc',
          color: 'white',
          padding: '20px 40px',
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: 'bold',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        Welcome to Course Helper
      </Box>

      {/* Main Section */}
      <Box
        sx={{
          marginTop: '40px',
          textAlign: 'center',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: '20px',
            color: '#333',
            fontSize: '18px',
          }}
        >
          Explore a curated collection of courses to boost your knowledge and skills.
          From programming to design, we have something for everyone!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#007acc' }}>
            - Interactive Tutorials
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#007acc' }}>
            - Hands-on Projects
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#007acc' }}>
            - Industry Experts
          </Typography>
        </Box>

        {/* Button to navigate to Landing Page */}
        <Link href="/landing" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              fontSize: '18px',
              padding: '10px 20px',
              backgroundColor: '#007acc',
              '&:hover': { backgroundColor: '#005fa3' },
            }}
          >
            Explore Courses
          </Button>
        </Link>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          marginTop: 'auto',
          padding: '10px',
          textAlign: 'center',
          fontSize: '14px',
          color: '#555',
        }}
      >
        Made with ❤ by the Course Helper Team
      </Box>
    </Box>
  );
};

export default HomePage;
