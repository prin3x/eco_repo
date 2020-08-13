import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview.component/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors.js";
import CollectionPreviewContainer from "./collection-overview.styles";

const CollectionsOverview = ({
  collections,
}) => (
  <CollectionPreviewContainer>
    {collections.map(
      ({
        id,
        ...otherCollectionProps
      }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        />
      )
    )}
  </CollectionPreviewContainer>
);

const mapStateToProps = createStructuredSelector(
  {
    collections: selectCollectionForPreview,
  }
);

export default connect(mapStateToProps)(
  CollectionsOverview
);
