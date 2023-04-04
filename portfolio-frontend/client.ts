import sanityClient, { createClient } from '@sanity/client';

export default createClient({
  projectId: 'om4rramt', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2023-04-04',
});
