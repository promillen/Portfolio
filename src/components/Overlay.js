import React, { useEffect, useState, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './Overlay.css';

function Overlay({ content, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isUnmounting, setIsUnmounting] = useState(false);
  const [innerWrapperWidth, setInnerWrapperWidth] = useState(0);
  const innerWrapperRef = useRef(null);

  useEffect(() => {
    const updateInnerWrapperWidth = () => {
      if (innerWrapperRef.current) {
        setInnerWrapperWidth(innerWrapperRef.current.offsetWidth);
      }
    };

    updateInnerWrapperWidth();

    window.addEventListener('resize', updateInnerWrapperWidth);

    setIsVisible(true);

    return () => {
      setIsVisible(false);
      window.removeEventListener('resize', updateInnerWrapperWidth);
    };
  }, []);

  const handleClose = () => {
    setIsUnmounting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 500); // Match this delay to the transition duration
  };

  const renderContent = (content) => {
    if (!content) return null;

    return content.map((item, index) => {
      switch (item.type) {
        case 'header':
          if (item.subtitle) {
            return (
              <div key={index} className="overlayHeader">
                <div className="overlaySubtitle">{item.subtitle}</div>
                <h1 className="overlayMainTitle">{item.mainTitle}</h1>
              </div>
            );
          }
          return (
            <div key={index} className="overlayHeader">
              <h1 className="overlayMainTitle">{item.text}</h1>
            </div>
          );

        case 'paragraphheader':
          return <h2 key={index} className="overlayparagraphheader">{item.text}</h2>;

        case 'paragraphsubheader':
          return <h3 key={index} className="overlayparagraphsubheader">{item.text}</h3>;

        case 'paragraph':
          return <p key={index} className="overlayParagraph">{item.text}</p>;

        case 'image':
          const hasBoxShadow = item.boxShadow !== false;
          const sizePercentage = item.size || 100;

          // For multiple images
          if (Array.isArray(item.src)) {
            const imageCount = item.src.length;
            const captions = Array.isArray(item.caption) ? item.caption : [];  
            
            return (
              <div 
                key={index} 
                className="overlayImageContainer"
                data-image-count={imageCount}
              >
                {item.src.map((src, imgIndex) => (
                  <div key={imgIndex} className="overlayImageWrapper">
                    <img 
                      className={`overlayImage ${hasBoxShadow ? 'with-shadow' : 'no-shadow'}`}
                      src={src} 
                      alt={item.alt} 
                    />
                    {captions[imgIndex] && (
                      <div className="overlayCaption">
                        {captions[imgIndex]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          }
        
          // For a single image
          return (
            <div key={index} className="overlayImageWrapper">
              <img 
                className={`overlayImage ${hasBoxShadow ? 'with-shadow' : 'no-shadow'}`}
                src={item.src} 
                alt={item.alt}
                style={{ 
                  width: innerWrapperWidth > 800 ? `${sizePercentage}%` : '100%', 
                }} 
              />
              {item.caption && (
                <div className="overlayCaption">
                  {item.caption}
                </div>
              )}
            </div>
          );

        case 'code':
          return (
            <SyntaxHighlighter 
              key={index} 
              language={item.language} 
              style={codeStyle}
              wrapLines={true}
              wrapLongLines={true}
              customStyle={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
            >
              {item.code}
            </SyntaxHighlighter>
          );

        case 'horizontalLine':
          return <hr key={index} className="overlayHorizontalLine" />;
          
        case 'unordered-list':
          return (
            <ul key={index} className="overlayUnorderedList">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="overlayListItem">
                  {listItem}
                </li>
              ))}
            </ul>
          );

        case 'ordered-list':
          const start = item.start || 1; 
        
          return (
            <ol key={index} className="overlayOrderedList" start={start}>
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="overlayListItem">
                  {listItem}
                </li>
              ))}
            </ol>
          );

        case 'video':
          const { src, controls = true, autoplay = false } = item;
        
          return (
            <video key={index} className="overlayVideo" controls={controls} autoPlay={autoplay}>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );  

        case 'table':
          return (
            <div key={index} className="overlayTableContainer">
              <table className="overlayTable">
                <caption>{item.caption}</caption>
                <colgroup>
                  {item.colWidths.map((width, colIndex) => (
                    <col key={colIndex} style={{ width: `${width}%` }} />
                  ))}
                </colgroup>
                <thead>
                  <tr>
                    {item.headers.map((header, headerIndex) => (
                      <th key={headerIndex} className={header.className}>
                        {header.text}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={cell.className}
                          rowSpan={cell.rowSpan || null}
                          colSpan={cell.colSpan || null}
                        >
                          {cell.text}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
      default:
        return null;
    }
  });
};

  return (
    <div
      className={`overlay ${isVisible ? 'visible' : ''} ${isUnmounting ? 'fading-out' : ''}`}
      onClick={handleClose}
    >
      <div className="overlayContent" onClick={(e) => e.stopPropagation()}>
        <div className="overlayInnerWrapper" ref={innerWrapperRef}>
          {renderContent(content)}
        </div>
      </div>
    </div>
  );
}

export default Overlay;