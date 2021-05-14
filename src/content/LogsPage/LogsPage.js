import { gql } from 'apollo-boost';
//import { Query } from 'react-apollo';
import React from 'react';
//import React from 'react';
import { ApolloProvider, Query } from 'react-apollo';
import ApolloClient from "apollo-boost";
//import fetch from 'isomorphic-fetch'
import { Tile } from 'carbon-components-react';

const client = new ApolloClient({
    uri: 'https://api.8base.com/cknjmuzlc01gg0djlaz426y0l'
  });
  

  const GET_DAILYLOGS_QUERY = gql`
  query {
    dailyLogsList {
      items {
        id
        date
        newMaterial
        developingMaterial
        frontpage {
            downloadUrl
          }
        practice
        }
      }
    }
  `;

  const LogsPage = () => {
    return (
     <div>
     <ApolloProvider client={client}>
     
       <Query query={GET_DAILYLOGS_QUERY}>
       {({ loading, error, data }) => {
         if (loading) return <h1>Fetching</h1>
         if (error)   return <h1>Error</h1>
         const logs = data.dailyLogsList.items
         console.log(logs);
         return (
               <div>
                 <div style={{fontSize:  "xx-large", fontWeight:  "bold"}}>Daily Logs</div>
                 {logs.map((log, index) => {
                     return (
                       <div key={index} >
                             <div style={{}}>
                             <Tile style={{ width: '650px', margin: '0 auto' }}>
                               <h2>
                                 <br />
                                 <p style={{fontStyle:  "italic", width: "200px", height:  "200px", backgroundColor:  "tan"}}>{log.date}{log.practice + ','}</p>
                                 
                                 <span style={{fontSize:  "medium", color:  "green"}}>New Material: {log.newMaterial}</span>
                                 <p>{log.developingMaterial}</p>
                                 </h2>
                                 <img src={log.frontpage.downloadUrl + '?download=true'} alt="front" style={{width:  "200px", height: "200px"}} />
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

            
export default LogsPage;
