//import React from 'react';
import { gql } from 'apollo-boost';
//import { Query } from 'react-apollo';
import React from 'react';
//import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from "apollo-boost";
//import fetch from 'isomorphic-fetch'
import { Tile } from 'carbon-components-react';


// const CommunityPage = () => {
//     return (
//       <p style={{color:  "red"}}>Hello</p>
      
//  );
// };


const client = new ApolloClient({
  uri: 'https://api.8base.com/cknjmuzlc01gg0djlaz426y0l'
});


const GET_SCORES_QUERY = gql`
  query {
    savedScoresList {
      items {
        id,
        name,
        composer
        }
     }
    }
  `;

 

const CommunityPage = () => {
     return (
      <div>
      <ApolloProvider client={client}>
      <Query query={GET_SCORES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Fetching</h1>
          if (error)   return <h1>Error</h1>
          const scores = data.savedScoresList.items
          return (
                <div>
                  <div style={{fontSize:  "xx-large", fontWeight:  "bold"}}>Scores</div>
                  {scores.map((score, index) => {
                      return (
                        <div key={index} >
                              <div style={{}}>
                              <Tile style={{ width: '650px', margin: '0 auto' }}>
                                <h2>
                                  <br />
                                  <p style={{fontStyle:  "italic", width: "200px", height:  "200px", backgroundColor:  "grey"}}>{score.name}</p>
                                  
                                  <span style={{fontSize:  "medium", color:  "green"}}>Composed by: {score.createdAt}</span>
                                </h2>
                                <p>{score.composer}</p>
                                </Tile>
                              </div>
                        </div>
                      )
                  })}
                </div>
              )
          }}
        </Query>

        

    </ApolloProvider>
    </div>
  );
}

             
export default CommunityPage;
