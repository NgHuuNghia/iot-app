import gql from 'graphql-tag'

const EDIT_AUTO = gql `
    mutation editAuto($node: String!, $input: Auto) {
      editAuto(node: $node, auto: $input){
      auto
      fan
      dew
      pump1
      pump2
      pump3
    }
  }
`

const EDIT_TIME = gql `
  mutation editTime($node: String!, $input: NodeInput){
    editTime(node: $node, input: $input){
    timer1
    timer2
    timer3
    thresholdHumidity
    thresholdTemperature
    }
  }
`

export { EDIT_TIME, EDIT_AUTO }