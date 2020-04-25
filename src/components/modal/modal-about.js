import React from 'react';

export default function ModalAbout({modalHandler}) {
    const closeHandler = () => modalHandler('cancel');
    return (
        <div className="modal about">
            <h1>About this app</h1>
            <p>This Sudoku web application was created by <a href="http://grantm.github.io/">Grant McLean</a>.</p>
            <p>It is <a href="https://www.fsf.org/about/what-is-free-software">free software</a>{' '}
            which you can use, copy, modify and share under the terms of the
            GNU Affero General Public License version 3 (<a href="https://opensource.org/licenses/AGPL-3.0"
            >AGPLV3</a>).</p>
            <p>Copyright © 2020 Grant McLean</p>
            <div className="buttons">
                <button className="primary" onClick={closeHandler}>OK</button>
            </div>
        </div>
    )
}
