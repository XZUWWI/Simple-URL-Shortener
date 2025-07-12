const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const BASE_URL = 'http://localhost:3000';

async function testUrlShortener() {
  console.log('🧪 Testing URL Shortener Application...\n');
  
  try {
    // Test 1: Shorten a URL
    console.log('1. Testing URL shortening...');
    const shortenResponse = await fetch(`${BASE_URL}/shorten`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: 'https://www.google.com',
        expiresIn: 30
      })
    });
    
    const shortenData = await shortenResponse.json();
    
    if (shortenResponse.ok) {
      console.log('✅ URL shortened successfully!');
      console.log(`   Original: ${shortenData.originalUrl}`);
      console.log(`   Short: ${shortenData.shortUrl}`);
      console.log(`   Code: ${shortenData.shortCode}`);
      
      // Test 2: Get statistics
      console.log('\n2. Testing statistics...');
      const statsResponse = await fetch(`${BASE_URL}/stats/${shortenData.shortCode}`);
      const statsData = await statsResponse.json();
      
      if (statsResponse.ok) {
        console.log('✅ Statistics retrieved successfully!');
        console.log(`   Clicks: ${statsData.clicks}`);
        console.log(`   Created: ${statsData.createdAt}`);
        console.log(`   Expires: ${statsData.expiresAt || 'Never'}`);
      } else {
        console.log('❌ Failed to get statistics:', statsData.error);
      }
      
      // Test 3: Test redirect (simulate)
      console.log('\n3. Testing redirect simulation...');
      console.log(`   Redirect URL: ${shortenData.shortUrl}`);
      console.log('   (In a real browser, this would redirect to the original URL)');
      
    } else {
      console.log('❌ Failed to shorten URL:', shortenData.error);
    }
    
  } catch (error) {
    console.log('❌ Test failed:', error.message);
  }
  
  console.log('\n🎉 Test completed!');
  console.log('📱 Open http://localhost:3000 in your browser to use the application.');
}

// Run the test
testUrlShortener(); 