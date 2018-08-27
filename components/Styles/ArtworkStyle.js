import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  artworkContainer: {
    marginTop: -50,
    shadowOffset:{  width: 0,  height: 6,  },
    shadowColor: 'black',
    shadowOpacity: 0.5
  },
  image: {
    width: null,
    justifyContent: 'center',
    resizeMode: 'stretch',
    height: 275,
    flex: 1
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.transparentLightGrey,
    position: 'relative',
    height: 50,
    top: -50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10
  },

  titleText: {
    fontSize: 18
  },
  artistText: {
    fontStyle: 'italic',
    fontSize: 16
  },
  iconContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})