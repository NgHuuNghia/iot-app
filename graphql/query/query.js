import gql from 'graphql-tag'

const GET_NODE = gql`
  query($node: String!) {
    findOne(node: $node){
      _id
      node
      timer1
      timer2
      timer3
      pump1
      pump2
      pump3
      dew
      fan
      auto
      thresholdTemperature
      thresholdHumidity
    }
  }
`
export { GET_NODE }