import React, { Component } from 'react';
import ResultsList from './ResultsList';

class Results extends Component {

    
    
    render() {
        const results = this.state.results.map((result, i) => results[i]);

        return (
            <div className="row">
                {this.props.propsItems.map((item, i) => {
                    return (
                        <div className='bookResult' id={(results.volumeinfo.id) ? this.props.results.id : null}>
                <ul className='column'>
                    <li><h4>{this.props.results.title}</h4>
                        {(this.props.img) ? <img src={
                            (this.props.img.smallThumbnail) ? this.props.img.smallThumbnail :
                                (this.props.img.thumbnail) ? this.props.img.thumbnail : ""
                        } alt='book cover' /> : null}
                        <p>Author: {(this.props.authors) ? this.props.authors.join(', ') : 'N/A'}</p>
                        <p>Price: {this.props.saleability}</p>
                        <p>{this.props.description}</p>
                    </li>
                </ul>
            </div>
                    );
                })}
            </div>
        );
    }
}

export default Results;