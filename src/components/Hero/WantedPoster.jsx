// Wanted poster component - One Piece style
import React from 'react';
import '../../styles/hero.css';

const WantedPoster = () => {
  const bountyAmount = 3000000000;
  const photoUrl = '/hehe.jpg';

  return (
    <div className="panel panel-photo">
      <div className="op-wanted-poster">
        <div className="poster-tape poster-tape-tl"></div>
        <div className="poster-tape poster-tape-br"></div>

        {/* Header */}
        <div className="op-poster-header">
          <span className="op-poster-title-text">WANTED</span>
          <span className="op-poster-doa">DEAD OR ALIVE</span>
        </div>

        {/* Photo area */}
        <div className="op-poster-photo">
          <img src={photoUrl} alt="Dang Minh Quan" />
        </div>

        {/* Name block */}
        <div className="op-poster-name-block">
          <div className="op-poster-name">DANG MINH QUAN</div>
        </div>

        {/* Bounty block */}
        <div className="op-poster-bounty-block">
          <div className="op-poster-bounty-label">Bounty</div>
          <div className="op-poster-bounty-amount">
            ${(bountyAmount / 1000000000).toFixed(1)}B
          </div>
        </div>

        {/* Footer */}
        <div className="op-poster-footer">
          <div className="op-poster-fine-print">
            KONO SAKUHIN WA FICTION DESU. JITSUZAISURU JINBUTSU DANTAI SONOTA NO SOSHIKI TO DOITSU NO MEISHOU...
          </div>
          <div className="op-poster-marine">MARINE</div>
        </div>
      </div>
    </div>
  );
};

export default WantedPoster;
