import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-us-west-2.graphcms.com/v2/cl4o4sb280iz801xi9ivec7kc/master',
	cache: new InMemoryCache()
});
