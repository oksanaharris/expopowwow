import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import {loadArtworks} from '../Redux/actions/artworks';
import {removeStarAction} from '../Redux/actions/artworks';
import {addStarAction} from '../Redux/actions/artworks';
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/ViewStyle'
import Artwork from '../components/Artwork.component.js'

userId = 1;

class ArtGallery extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  constructor() {
    super();
    this.handleStarClick = this.handleStarClick.bind(this);
    this.state = {};
  }

  state = {
    dataObjects: [
      {title: 'First Title', artist: 'First artist', imageSource: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg'},
      {title: 'Second Title', artist: 'Second artist', imageSource: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg'},
      {title: 'Third Title', artist: 'Third artist', imageSource: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg'},
      {title: 'Fourth Title', artist: 'Fourth artist', imageSource: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg'},
      {title: 'Fifth Title', artist: 'Fifth artist', imageSource: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg'},
      {title: 'Sixth Title', artist: 'Sixth artist', imageSource: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg'},
      {title: 'Seventh Title', artist: 'Seventh artist', imageSource: 'http://powwowhawaii.com/wp-content/uploads/2017/03/pwh2017_TaraMcPherson_JasperWong.jpg'}
    ]
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} artist={item.artist} />
  *************************************************************/

  componentWillMount(){
    this.props.loadArtworks();
  }

  handleStarClick() {
    console.log('handle star click method activated on PARENT');
    // e and id used to be in the method definition

    let starId;

    // if (this.props.artworks.filter(artwork => {
    //   return artwork.id === id;
    //   })[0].Stars.filter(star => {
    //     starId = star.id;
    //     console.log('star id is', starId);
    //     return star.user_id === userId;
    //   }).length > 0)
    // {
    //   console.log('executing remove star props on star id ', starId);
    //   this.props.removeStar(starId);
    // } else {
    //   console.log('executing add star props on art id ', id);
    //   this.props.addStar(id, userId);
    // }
  }

  renderRow ({item}) {

    let starIcon;
    let active_star = 'ios-star';
    let inactive_star = 'ios-star-outline';

    if (item.Stars.some(star => {
      return star.user_id === userId;
    }))
    {
      starIcon = active_star;
    } else {
      starIcon = inactive_star;
    }

    return (
      <View style={styles.row}>
        <Artwork src={item.url} title={item.title} artist={item.Artist.name} starIcon={starIcon} handleStarClick={this.handleStarClick}></Artwork>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.sectionSeparator}> - *** - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index.toString();

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20;

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {

    console.log('rendering the main method');

    let artworks = [];

    if (this.props.artworks.length > 0) {
      artworks = this.props.artworks.filter(artwork => {
        return artwork.id !== 1;
      });
    }

    console.log('this is artworks', artworks);
    console.log('this is props artworks', this.props.artworks);

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={artworks}
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    artworks: state.artworks
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadArtworks: () => {
      dispatch(loadArtworks());
    },
    removeStar: (id) => {
      dispatch(removeStarAction(id));
    },
    addStar: (artwork_id, user_id) => {
      dispatch(addStarAction(artwork_id, user_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtGallery)
