import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectError, selectLoading } from '../../../business/common/common-selectors';
import { loadSongs } from '../../../business/songs/songs-actions';
import { selectSongs, selectSongsList } from '../../../business/songs/songs-selectors';
import withErrorBoundary from '../../utils/hocs/WithErrorBoundary';

const SongsPage = ({ onSubmitForm }) => {
    useEffect(() => {
        onSubmitForm();
    }, [onSubmitForm]);

    return <div>Songs list!!!!</div>;
};

const mapStateToProps = createStructuredSelector({
    songs: selectSongsList(),
    error: selectError(selectSongs),
    loading: selectLoading(selectSongs),
});

export function mapDispatchToProps(dispatch) {
    return {
        onSubmitForm: evt => {
            if (evt !== undefined && evt.preventDefault) {
                evt.preventDefault();
            }
            dispatch(loadSongs());
        },
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(withErrorBoundary(SongsPage));
