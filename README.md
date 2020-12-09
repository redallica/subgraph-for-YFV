# subgraph-for-YFV
This is a subgraph for the YFValue (**$YFV**) protocol

This requires the YFValue (**$YFV**) contract (address: *0x45f24baeef268bb6d63aee5129015d69702bcdfa*) to be ingested by the subgraph, with the events that were sourced to be stored in the subgraph database:

•	event Transfer

•	event Approval

This contract is running on Ethereum Mainnet. In order to do so the *subgraph.yaml* file will need to have the contract address (see above), the entities (defined in the GraphQL schema) and the event handlers.

## Brief Description of The Graph Node Setup

A Graph Node can run multiple subgraphs, and in this case it can have a subgraph for Ropsten, Mainnet and Kovan. The subgraph ingests event data by calling to Infura through http. It can also connect to any geth node or parity node that accepts RPC calls. Fast synced geth nodes work. To use parity, the *--no-warp* flag must be used. Setting up a local Ethereum node is more reliable and faster, but Infura is the easiest way to get started.

This subgraph has three types of files which tell the Graph Node to ingest events from specific contracts. They are:

•	The subgraph manifest (subgraph.yaml)

•	A GraphQL schema (schema.graphql)

•	Mapping scripts (mapping.ts)

This repository has these files created and ready to compile, so a user can start this subgraph on their own.

The Graph team has provided a quick guide on how to start up a graph node. If these steps aren't descriptive enough, the [getting started guide](https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md) has in depth details on running a subgraph.

## Ingesting events from the YFV Contract

This subgraph is ingesting **2 events** from the contract source code:

•	event *Transfer(address indexed from, address indexed to, uint256 value)* emitted when *‘value’* tokens are moved from one account (*‘from’*) to another (*‘to’*).

•	event *Approval(address indexed owner, address indexed spender, uint256 value)* emitted when the allowance of a *‘spender’* for an *‘owner’* is set by a call to *{approve}*. *‘value’* is the new allowance.

## Steps to initiate and deploy The YFV Subgraph on the hosted service

1.	Sign in The Graph explorer with your Github account and click on ‘Add subgraph’.

2.	Create the YFValue subgraph in The Graph explorer

3.	Install Node.js (https://nodejs.org/en/)

4.	Install Git (in this case we are using Windows OS) (https://gitforwindows.org/)

5.	Install Yarn and run `npm install -g npm` followed by `npm-windows-upgrade` if needed

6.	Install Graph CLI by running: `yarn global add @graphprotocol/graph-cli`. 

7.	Initiate the Orion protocol subgraph with: `graph init \ --from-contract 0x45f24baeef268bb6d63aee5129015d69702bcdfa /<Githubusername>/<Directory>`

8.	The initiated subgraph at this stage is not completed, it is just a sort of a template that you will need to update and complete.

9.	Update the manifest, schema and the mappings to reflect how the subgraph will ingest data.

10.	Now deploy the YFV to The Graph Node with `yarn deploy`. You should see a lot of blocks being skipped in the graph-node terminal, and then it will start ingesting events from the moment the contracts were uploaded to the network.

More details are provided in this [Medium article](https://medium.com/swlh/how-to-build-a-subgraph-on-windows-for-a-non-tech-curator-6641030376bd)

Now that you have subgraph is running you may open a [Graphiql](https://github.com/graphql/graphiql) browser at *127.0.0.1:8000* and get started with querying.

## Viewing the Subgraph on the Graph Hosted Service
This subgraph is on [The Graph Explorer](https://thegraph.com/explorer/) at the following address: [https://thegraph.com/explorer/subgraph/redallica/orion-protocol](https://thegraph.com/explorer/subgraph/redallica/yfv). 
