import React from 'react';
import { useThree } from '@react-three/fiber';
import { Scroll } from '@react-three/drei';
import Item from './Item';
import RotatingModel from './RotatingModel';
import PlaneItem from './Plane';

function ItemGallery({aspectRatio, onImageClick}) {
  const { width: w, height: h } = useThree((state) => state.viewport);

  const textSize = 0.5;
  const fontUrl = './fonts/BricolageGrotesque-ExtraBold.ttf';
  const imgTextColor = '#000000';

  const scaleFactor = aspectRatio < 0.75 ? 1.5 : aspectRatio > 1.33 ? 0.8 : 1;
  const positionY = aspectRatio < 0.75 ? 2 : aspectRatio > 1.33 ? 0.5 : 1;

  console.log(`Scale factor: ${scaleFactor}`);
  console.log(`Position Y: ${positionY}`);

  return (
    <Scroll>
    <ambientLight intensity={1} />
    <directionalLight position={[2, 2, 2]} intensity={1.5} />
    <RotatingModel url="./images/face_3D_compressed.glb" scale={[w / 10, w / 10, w / 10]} position={[-w / 4.0, -h / 3, 0]} />
    
      {/* Academic Projects */}
      <group>
        <PlaneItem
          planeColor="#00BF00"
          planeWidth={w / 5}
          planeHeight={w / 5}
          position={[-w / 3, -h * 1.425, -1]}
        />
        <Item 
          url="images/main_page/Geolocation.jpg"
          scale={[w / 3, w / 4.4, 1]}
          position={[-w / 4, -h * 0.9, 0]}
          text={"Development of an Ultralow Power Geolocation Device"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'MASTER THESIS PROJECT: Technical University of Denmark',
              mainTitle: 'WiFi and Satellite Scanner for Ultralow Power Geolocation'  
            },
            { type: 'horizontalLine' },
            { type: 'paragraph', text:
              <>In my master's thesis, my partner and I developed a cutting-edge geolocation solution for IoT applications, designed to balance ultra-low power consumption with seamless indoor and outdoor geolocation. We centered our project on the LR1110 chip, which integrates Wi-Fi, GNSS scanning, and LoRaWAN communication to achieve long-range, low-power performance. Our work had three main objectives:</>
            },
            { type: 'ordered-list', items: [
              'Investigate the business potential and map product requirements', 
              'Explore the technical capabilities of the LR1110 chip, setup programming environment, and program a proof of concept', 
              'Develop a geolocation tracker prototype and evaluate its performance in real-world scenarios'
            ]}, 
          
            { type: 'paragraphheader', text: 'Business Potential and Product Requirements' },  
            { type: 'paragraph', text:
              <>Through desk research and interviews with potential stakeholders, we identified business opportunities and use cases. We organized the empirical data into an affinity diagram, which helped us visually interpret the collected complex and non-repetitive data. This approach allowed themes, trends, and needs to emerge, providing a clear understanding of the requirements for the geolocation tracker. The identified requirements, detailed in the table below, guided the technical development of the prototype.</>
            },
            { type: 'image', 
              src: './images/overlays/Geolocation/Affi-opbygning.jpg',
              alt: 'Cartoon showing the 6 steps in creating an Affinity diagram',
              caption: <>Representation of the workflow when creating an affinity diagram using the KJ-method (<a href="Iba, Yoshikawa, and Munakata, 2017">Iba, Yoshikawa, and Munakata, 2017</a>)</>,
              boxShadow: false
            },
            { type: 'image', 
              src: ['./images/overlays/Geolocation/Affi-chaos.jpg', './images/overlays/Geolocation/Affi-order.jpg'],
              alt: 'Pictures showing the initial chaos and the final Affinity Diagram',
              caption: ['The initial chaos during the affinity diagram workshop', 'The final affinity diagram'],},
            

            { type: 'paragraphheader', text: 'Prototype and Performance Evaluation' },
            { type: 'paragraph', text:
              <>Over the six-month project period, we completed two major iterations of the codebase and three iterations of the hardware, resulting in a fully functional geolocation tracker prototype. This prototype featured a custom PCB and a web interface that allowed users to easily add the tracker to a LoRaWAN network and view its location. We tested the prototype in various real-world scenarios, including both indoor and outdoor environments, to evaluate its performance and accuracy.

              The results were promising, with the tracker demonstrating high accuracy and reliability in most conditions. The table below outlines the product requirements and indicates which were met by the prototype. While we did not fully achieve the ultra-low power target and encountered some limitations with GNSS scanning, the project successfully showcased the LR1110 chip's capabilities in a real-world context. It also provided valuable insights into the practical challenges and potential of low-power geolocation technologies using LoRaWAN, laying a solid foundation for future research and advancements in this field.</>
            },
            { type: 'image', src: [
              './images/overlays/Geolocation/PCB_v1.jpg', 
              './images/overlays/Geolocation/PCB_v2.jpg',
              './images/overlays/Geolocation/PCB_v3.jpg'
            ],
              alt: 'Three images showing the three iterations of the PCB design',
              caption: ['PCB version 1', 'PCB version 2', 'PCB version 3'],
              boxShadow: false
            },
            {
              type: 'table',
              caption: <><strong>Table: </strong>Product requirements deducted from empirical data obtained from interviews and desk research. Green color denotes fulfilled requirements and wishes, while red signifies those yet to be achieved.</>,
              colWidths: [20, 40, 40],
              headers: [
                { text: 'Category', className: 'category' },
                { text: 'Requirements' },
                { text: 'Wishes' },
              ],
              rows: [
                [
                  { text: 'Functional\nrequirements', className: 'category', rowSpan: 6 },
                  { text: 'Location accessible by phone and tablet', className: 'fulfilled' },
                  { text: 'Data accessible via API', className: 'fulfilled' }
                ],
                [
                  { text: 'Low battery alarm', className: 'fulfilled' },
                  { text: 'View battery charge', className: 'fulfilled' }
                ],
                [
                  { text: 'Configurable ping interval', className: 'fulfilled' },
                  { text: 'View temperature', className: 'fulfilled' }
                ],
                [
                  { text: 'Remote configuration of ping interval', className: 'fulfilled' },
                  { text: 'User adjustable LoRaWAN class', className: 'fulfilled' }
                ],
                [
                  { text: 'Location triggered by movement', className: 'fulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'Accuracy of 20 m', className: 'unfulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'Performance requirements', className: 'category', rowSpan: 2 },
                  { text: 'LoRa range of 5 km in open terrain', className: 'fulfilled' },
                  { text: '' }
                ],
                [
                  { text: '2 years battery life and 1000 positions on one battery charge', className: 'unfulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'Physical requirements', className: 'category', rowSpan: 5 },
                  { text: 'Shape that enables easy case design', className: 'fulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'Size of max 50 × 40 × 10 mm', className: 'fulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'External antennas', className: 'fulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'External battery', className: 'fulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'Weight of 20 g without battery and antennas', className: 'fulfilled' },
                  { text: '' }
                ],
                [
                  { text: 'Sustainability requirements', className: 'category rowspan-correction', rowSpan: 2},
                  { text: 'Unit price < 1000 DKK', className: 'fulfilled' },
                  { text: 'Rechargeable battery', className: 'fulfilled' }
                ],
                [
                  { text: '' },
                  { text: 'Open-source', className: 'fulfilled' }
                ]
              ]
            },
            { type: 'image', 
              src: [
              './images/overlays/Geolocation/final_product.jpg',
              './images/overlays/Geolocation/frontend.jpg'
              ],
              alt: 'Two images, one showing the final product and the other showing the frontend of the web interface',
              caption: ['Final product with antennas', 'Main screen of the web interface'],
            },

            { type: 'horizontalLine' },
            { type: 'paragraphheader', text: 'Read more' },
            { type: 'unordered-list', items: [
              <><a href="https://github.com/MagnusErler/WiFi_and_Satellite_Scanner_for_Geolocation/tree/main">Github repository</a></>,
              <><a href="./dataFiles/Wi-Fi and Satellite Scanner for Ultra-low Power Geolocation.pdf" target="_blank">Master thesis (PDF)</a></>
            ]},
          ])}
        />

        <Item
          url="images/main_page/DCL.webp"
          scale={[7.3, w / 4, 1]}
          position={[w / 4.5, -h - 1, 0]}
          text={"Creation of the Circular Lab at Roskilde Festival"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'BACHELOR PROJECT: Aalborg University',
              mainTitle: 'A Co-Creation Design Process for The Circular Lab at Roskilde Festival'  
            },
            { type: 'horizontalLine' },
            { type: 'paragraph', text: 
            <>In collaboration with Roskilde Festival, our bachelor project project focused on the co-creation of "The Circular Lab"—an innovative space designed to foster sustainable entrepreneurship. Sponsored by Roskilde Festival and Tuborg Fondet. The lab will operate over a five-year period, and aspires to become Denmark's leading laboratory for sustainable behavior. Serving as a dynamic testing ground for circular solutions, it will provide over 200 young entrepreneurs with access to knowledge, networks, and potential investors, aiming to drive tangible changes in the market, inspiring the next generation to take a leading role in sustainability. 

            We collaborated closely with Kristine Barenholdt, the project manager for The Circular Lab, to design and implement this unique initiative. Our work has laid the groundwork for this transformative space, challenging the status quo and fostering a culture of sustainability at Roskilde Festival and beyond, while teaching Roskilde Festival to effectively engage the entrepreneurs and other stakeholders in the lab’s development, ensuring a sustainable project that maximizes value for the entrepreneurs, the festival, its guests, and the community at large.</> },

            { type: 'image', 
              src: './images/overlays/DCL/Panorama.jpg', 
              caption: 'Panorama of the site before creation of The Circular Lab', 
              alt: 'Panorama of the site before creation of The Circular Lab. There is a spacious lawn surrounded by tress and a worn down barn with graffiti' 
            },

            { type: 'paragraphheader', text: 'Design Process and Methodology' },
            { type: 'paragraph', text: 
            <>Our team navigated the design process using the Staging Negotiation Spaces framework, which emphasizes the shift from a traditional creative expert role to that of a stager and facilitator of negotiations among stakeholders. This framework draws on participatory design practices and analytical insights from actor-network theory, guiding us in creating an inclusive and collaborative environment. We employed various methodologies, including design games, prototyping, interviews, and other design techniques, to gather and analyze empirical data. Through this co-creation process, we successfully engaged multiple stakeholders—entrepreneurs, festival organizers, and participants—in collaboratively shaping The Circular Lab. Additionally, we empowered Roskilde Festival by equipping them with the tools and knowledge to continue engaging stakeholders effectively in the development and evolution of the lab, ensuring its ongoing relevance and sustainability.</> },

            { type: 'image', 
              src: [
                './images/overlays/DCL/opbygning1.jpg',
                './images/overlays/DCL/opbygning2.jpg',
                './images/overlays/DCL/opbygning3.jpg',
              ],
              caption: [
                'Oblique image with drawn markings showing the future layout of outside area', 
                'Scale model of the barn with detachable roof used for planning the interior', 
                'Design workshop with the entrepreneurs discussing the layout of the barn'
              ], 
            },

            { type: 'paragraphheader', text: 'Outcomes and Impact' },
            { type: 'paragraph', text: 
            <>The project led to the establishment of a peer-to-peer network of entrepreneurs who have collectively developed innovative circular products. This network not only serves as a collaborative platform but also acts as a catalyst for sustainable practices, extending the lab's impact beyond the immediate festival context. The insights gained from our process are intended to assist Roskilde Festival in its journey towards a more sustainable future, positioning The Circular Lab as both a showcase for cutting-edge circular solutions and a model for broader societal change. Building on our initial success, we have continued our collaboration with Roskilde Festival, further supporting them in setting up and expanding The Circular Lab area, ensuring it evolves into a vibrant space that continuously fosters innovation and sustainable practices.</> },

            { type: 'image', 
              src: [
                './images/overlays/DCL/final1.jpg',
                './images/overlays/DCL/final2.jpg',
                './images/overlays/DCL/final3.jpg',
              ],
              caption: [
                'The front entrance portal to The Circular Lab', 
                'The barn after cleaning and painting', 
                'Entrepreneurs carrying out taste tests of their product'
              ], 
            },

            { type: 'horizontalLine' },
            { type: 'paragraphheader', text: 'Learn more' },
            { type: 'unordered-list', items: [
              <a href="./dataFiles/Gruppe 10 - En samskabende designproces af Det Cirkulære Laboratorium på RF.pdf">Bachelor report (PDF)</a>,
              <a href="https://www.roskilde-festival.dk/en/the-circular-lab">www.roskilde-festival.dk/en/the-circular-lab</a>,
              <a href="https://www.tuborgfondet.dk/project/fonden-roskilde-festival/">www.tuborgfondet.dk/project/fonden-roskilde-festival/</a>,
              <a href="https://www.youtube.com/watch?v=1_ZdYGxgrjw">Informational video about the project and area</a>,
              <a href="https://www.youtube.com/watch?v=G9tBTMkVE04">Interview with entrepreneurs and video from the area (2022)</a>,
              <a href="https://www.youtube.com/watch?v=X-rfSnlqzVc">Interview with entrepreneurs and video from the area (2024)</a>
              ]
            },   
          ])}
        />

        <Item
          url="images/main_page/Jord1.png"
          scale={[w / 2.5, w / 4.8, 1]}
          position={[-w / 4.8, -h * 2.7, 0]}
          text={"Business and Sustainability Assessment of Soil Washing"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          planeWidth={w / 5}
          planeHeight={w / 5}
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'SEMESTER PROJECT: Product/Service System Design',
              mainTitle: 'Business and Sustainability Assessment of Soil Washing'  
            },
            { type: 'horizontalLine' },
            { type: 'paragraph', text: 
              <>Soil, especially gravel, is becoming a scarce resource in the construction industry. Large quantities of sand and gravel are used in road construction, site preparation, concrete production, and other building activities. As a result, significant amounts of contaminated soil are excavated, which are not reused but instead end up in landfills or are used for purposes like noise barriers. This practice exacerbates resource scarcity, forcing longer transportation distances to obtain raw materials, which in turn increases CO2 emissions associated with construction and raises the cost of building materials. One potential solution to mitigate this problem is shifting from disposal and utility use to cleaning and recycling contaminated soil.</> 
            },

            { type: 'paragraph', text: 
              <>One way to do this to utilize soil washing, which is a method of cleaning contaminated soil to make it suitable for reuse in new construction projects. Our project explored the integration of soil washing technology as a product/service system for the company HD Jordpark. We evaluated its environmental and business potential, using ANT (Actor-Network Theory), LCA (Life Cycle Assessment), BMC (Business Model Canvas) and Porters Five Forces.</>
            },
            
            { type: 'image', 
              src: './images/overlays/Jordvask/jordens_vej_før_jordvask.jpg', 
              caption: 'The current journey of soil from excavation to landfill', 
              alt: 'Image showing the current journey of soil when used in the building industry: Soil excavation -> first time use -> biologic cleaning -> landfill' 
            },
            { type: 'image', 
              src: './images/overlays/Jordvask/jordens_vej_efter_jordvask.jpg', 
              caption: 'The future journey of soil where soil washing enables its reuse', 
              alt: 'Image showing the future journey of soil when implementing a soil washing plant: Soil excavation -> first time use -> Soil washing -> Reuse'  },

            { type: 'paragraphheader', text: 'Outcomes' },
            { type: 'paragraph', text: 
              <>The depletion of Earth's resources is a growing issue, particularly in the construction industry, where unsustainable practices and a lack of proper resource utilization are common. Our project with HD JordPark revealed that the industry is heavily cost-driven, as highlighted by our Business Model Canvas (BMC) analysis. This cost-focused approach has kept companies from adopting more sustainable practices, as they often do not see immediate economic benefits However, HD JordPark is willing to challenge this approach by implementing a soil washing facility, in an effort to shift the industry towards a more sustainable approach, and position themselves more strongly.</>
            },

            { type: 'paragraph', text: 
              <>Our market analysis using Porter's Five Forces demonstrated that a transition towards sustainability could strengthen HD JordPark’s market position by enhancing their bargaining power and differentiating them from competitors. Additionally, we identified value gaps through the Customer Activity Cycle (CAC), such as the need for streamlined loading and unloading at the same location, which a soil washing unit will make possible.</>
            },
            { type: 'image', 
              src: './images/overlays/Jordvask/Porters.png', 
              size: 60, 
              boxShadow: false,
              caption: 'Porter’s Five Forces analysis of the soil washing industry',
              alt: 'Image showing the Porter’s Five Forces analysis of the soil washing industry'
            },
            
            { type: 'paragraph', text: 
              <>The life cycle assessment of different scenarios showed that soil washing could be environmentally beneficial in the long run by reducing resource depletion and transportation emissions. However, the benefits are context-sensitive; in the short term, emissions from soil washing can be higher compared to the extraction of new resources due to current short transport distances for raw materials. To maximize the environmental impact of soil washing, it is crucial to establish multiple facilities across the country, minimizing transportation needs and associated emissions.</>
            },
            { type: 'image', 
              src: './images/overlays/Jordvask/LCIA BILAG .jpg',
              boxShadow: false,
              caption: 'Life Cycle Assessment of current practice (2021), 2071 scenaria and with soil washing',
              alt: 'Image showing the Life Cycle Assessment of different scenarios for soil washing'
            },
            { type: 'image', 
              src: './images/overlays/Jordvask/Grafer til metoder.png',
              boxShadow: false,
              caption: 'Above highlighted coloumns shown in a graph',
              size: 60,
            },
            
            { type: 'paragraph', text: 
              <>Our Actor-Network Theory (ANT) diagram revealed that truck drivers currently hold significant power in the industry, acting as both customers and key connectors to other clients. This imbalance of influence can hinder HD JordPark's ability to implement changes and differentiate their business model.</>
            },
            { type: 'image', 
              src: './images/overlays/Jordvask/ANT_gammel.jpg',
              boxShadow: false,
              caption: 'Actor-Network Theory diagram showing the current strength of the major stakeholders with relevance to HD JordPark',
              alt: 'Image showing the Actor-Network Theory diagram showing the current strength of the major stakeholders with relevance to HD JordPark'
            },
            { type: 'image', src: './images/overlays/Jordvask/ANT_ny.jpg',
              boxShadow: false,
              caption: 'Actor-Network Theory diagram showing the desired change in the relations between the stakeholders with relevance to HD Jordpark, if a soil washing plant is implemented',
              alt: 'Image showing the Actor-Network Theory diagram showing the desired change of the relations if a soil washing plant is implemented'
             },
            
            { type: 'paragraph', text: (
              <>Using Life Cycle Management, we synthesized our analyses to identify where HD JordPark could initiate new, sustainable strategies and stand out in the market. The results suggest that HD JordPark is already on the right path, and despite the challenges posed by restructuring, there is significant potential for both economic and sustainable profitability. By embracing these changes, HD JordPark is poised not only to evolve its own operations but also to set an example for broader industry transformation towards sustainability.</>),
            },
            { type: 'image', 
              src: './images/overlays/Jordvask/Ny BMC.jpg',
              boxShadow: false,
              caption: 'Business Model Canvas showing the new business model for HD JordPark with soil washing',
              alt: 'Image showing the Business Model Canvas showing the new business model for HD JordPark with soil washing'
            },
          ])}
        />

        <Item
          url="images/main_page/Corn_cropped.jpg"
          scale={[w / 6, w / 3.5, 1]}
          position={[-w / 14, -h * 2.1, 0]}
          text={"Image Analysis of Corn Kernels"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          planeWidth={w / 5}
          planeHeight={w / 5}
          fontUrl={fontUrl} onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'COURSE PROJECT: Image Processing',
              mainTitle: 'Analysis of Corn Kernels'  
            },
            { type: 'horizontalLine' },

            { type: 'paragraph', text: 
            <>In this project, we developed a comprehensive image processing pipeline to analyze and extract features from images of corn kernels. The project aimed to solve three primary problems:</> }, 

            { type: 'ordered-list', items: [
            'Counting Corn Kernels', 
            'Finding the Centroid and Apex of Each Kernel', 
            'Identifying Kernel Tip Colors (Red or White)'], },

            { type: 'paragraph', text: 
            <>Each task was approached using as basic and lightweight image processing techniques in Mathematica as possible, enabling fast and accurate analysis despite challenges like overlapping kernels and variations in kernel appearance.</> },

            { type: 'paragraphheader', text: 
            <>Problem 1: Counting number of corn kernels</> },
            
            { type: 'paragraphsubheader', text: 'Objective' },
            { type: 'paragraph', text: 
            <>The goal of this problem was to develop an algorithm that accurately counts the number of kernels in images provided by the Department of Cornology. The challenge lay in the kernels often touching or overlapping, making it difficult for simple image processing techniques to count them accurately.</> },

            { type: 'paragraphsubheader', text: 'Approach' },

            { type: 'paragraph', text: 
              'To tackle this, I developed the following function, which counts kernels using a combination of image processing techniques:' },

            { type: 'ordered-list', items: [
              <><strong>Binarization:</strong> Convert the image to a binary form where kernels are highlighted against the background.</>,
              <><strong>Noise Reduction:</strong> Use morphological opening to reduce noise and improve kernel separation.</>,
              <><strong>Filling Holes:</strong> Apply a filling transform to plug any holes within the kernels, ensuring that each kernel is a solid object.</>,
              <><strong>Area Calculation:</strong> Measure the areas of all detected components (kernels) in the image.</>,
              <><strong>Median Area Determination:</strong> Calculate the median area of these components to serve as a reference for filtering.</>,
              <><strong>Component Filtering and Counting:</strong><br/>   - Exclude components that are significantly smaller than the median, as they are likely noise.<br/>   - For components larger than 160% of the median, divide their area by the median to estimate the count of overlapping kernels.<br/>   - Increment the count for components within a reasonable size range.</>,
            ]},

            { type: 'code', language: 'mathematica', code: 
`cornCountCBH[img_] := Module[
  {i, opened, composite, comps, areas, median, cornCount},
  opened = Opening[Binarize[img], DiskMatrix[30]];
  comps = ComponentMeasurements[FillingTransform[opened], "Area"];
  areas = Values[comps];
  median = Median[areas];
  cornCount = 0;
  For[i = 1, i ≤ Length[areas], i++,
  If[areas[[i]] > (1.60*median),
    cornCount += Round[areas[[i]] / median],
    If[areas[[i]] < (0.3*median), Continue[], cornCount++]
      ]
    ];
  Return[cornCount];
]` 
            },

            { type: 'paragraphsubheader', text: 'Results' },
            { type: 'paragraph', text: 
            <>The algorithm provided accurate kernel counts with minimal deviation from ground truth, achieving an error rate of only 0.227% when tested on a set of 10 images.</>},

            { type: 'horizontalLine' },

            { type: 'paragraphheader', text: 'Problem 2: Finding the Centroid and Apex' },
              
            { type: 'paragraphsubheader', text: 'Objective' },
            { type: 'paragraph', text: 'To accurately locate the centroid (center of mass) and apex (pointed end) of each kernel in the images.'},

            { type: 'paragraphsubheader', text: 'Approach' },

            { type: 'paragraph', text: <>Two functions were developed: <em>cornCentroid</em> for finding centroids and <em>cornApex</em> for finding apexes.</>},

            { type: 'paragraph', text: <><strong>Corn Centroid Detection Steps:</strong></>},

            { type: 'ordered-list', items: [
              <><strong>Binarization and Noise Reduction:</strong> Similar to the first problem, the image was binarized and denoised using morphological operations.</>, 
              <><strong>Component Separation:</strong> Connected components were identified and kernels with areas significantly larger than the median were separated using erosion and dilation.</>, 
              <><strong>Centroid Calculation:</strong> The centroids were calculated for each isolated kernel.</>, ], },

            { type: 'code', language: 'mathematica', code: 
`cornCentroidCBH[img_] := Module[
  {denoised, median, connectedKernels, maskEroded, connectedRemoved, centroids},
    denoised = Opening[FillingTransform[Binarize[img]], DiskMatrix[20]];
    median = Median[Values[ComponentMeasurements[denoised, "Area"]]];
    connectedKernels = SelectComponents[denoised, #Area > median*1.5 &];
    maskEroded = Dilation[Erosion[connectedKernels, DiskMatrix[30]], DiskMatrix[15]];
    connectedRemoved = ImageMultiply[ColorNegate[connectedKernels], denoised];
    separatedKernels = ImageAdd[connectedRemoved, maskEroded];
    centroids = ComponentMeasurements[separatedKernels, "Centroid"];
  Return[{centroids, separatedKernels}];
]` 
            },
            
            { type: 'paragraph', text: <><strong>Apex Detection Steps:</strong></>},
            { type: 'ordered-list', items: [
              <><strong>Convex Hull Analysis:</strong> The convex hull vertices of each kernel were calculated.</>, 
              <><strong>Apex Determination:</strong> The mean distance to neighbors for each vertex was calculated, and the vertex with the maximum mean distance was identified as the apex of the kernel.</>, ], 
            },
            { type: 'code', language: 'mathematica', code: 
`cornApexCBH[img_] := Module[
  {maxMeanDist, vertices},
    vertices = ComponentMeasurements[img, "ConvexVertices"];
    maxMeanDist = {};
    Do[
      AppendTo[maxMeanDist, maxMeanDistToNeighbors[Values[vertices[[i]]]]],
    {i, Length[vertices]}
    ];
  Return[maxMeanDist];
]` 
            },
            
            { type: 'paragraphsubheader', text: 'Results' },
            { type: 'paragraph', text: 'The calculated centroids and apexes were visually confirmed against ground truth data, which showed a high accuracy in detecting these key points.'},
            { type: 'image', 
              src: './images/overlays/Corn/corn_apex.jpg',
              caption: 'Corn kernels with detected kernel count/centroids and apexes marked with blue text and purple dots, respectively',
              alt: 'Image showing the detected centroids and apexes of corn kernels'
            },

            { type: 'horizontalLine' },

            { type: 'paragraphheader', text: 'Problem 3: Red or White Tip Detectio' },
              
            { type: 'paragraphsubheader', text: 'Objective' },
            { type: 'paragraph', text: 
            <>To classify the tip of each tip kernel, as either white, red or indeterminate.</> },

            { type: 'paragraphsubheader', text: 'Approach' },
            { type: 'ordered-list', items: [
            'The image was binarized and denoised.', 
            'Red and white regions were separated based on color thresholds, and the centroids of these regions were calculated.',
            'A simple classifier was used to label each kernel based on the dominant color at its tip.', ], },

            { type: 'code', language: 'mathematica', code: 
`cornRedOrWhiteCKBH[img_] := Module[
  {binary, denoise, binarized, components, r, g, b, bb, bbb, bbd, red, white, unknown, redCenters, whiteCenters, unknownCenters, labeledCenters},
    binary = Binarize[ColorConvert[img, "Grayscale"], 0.15];
    denoise = Dilation[Erosion[binary, DiskMatrix[20]], DiskMatrix[25]];
    binarized = Erosion[FillingTransform[binary]*denoise, DiskMatrix[35]];
    {r, g, b} = ColorSeparate[img];
    bb = FillingTransform[Binarize[b, 0.4]];
    bbb = Dilation[Erosion[bb, DiskMatrix[25]], DiskMatrix[35]];
    bbd = Dilation[Erosion[Dilation[bb, DiskMatrix[10]], DiskMatrix[35]], DiskMatrix[15]];

    For[i = 1, i ≤ 100, i++,
      bbb = binarized*Dilation[bbb, DiskMatrix[3]];
      bbd = binarized*Dilation[bbd, DiskMatrix[3]];
    ];

    red = binarized - bbd - bbb;
    white = bbb;
    unknown = bbd - bbb;
    redCenters = ComponentMeasurements[red, "Centroid"];
    whiteCenters = ComponentMeasurements[white, "Centroid"];
    unknownCenters = ComponentMeasurements[unknown, "Centroid"];

    labeledCenters = Join[
      {#2, 1} & /@ redCenters,
      {#2, 0} & /@ whiteCenters,
      {#2, -1} & /@ unknownCenters
    ];

    labeledCenters
  ]` 
            },

            { type: 'paragraphsubheader', text: 'Results' },
            { type: 'paragraph', text: 'The function successfully categorized the kernels by color, with the output closely matching the ground truth labels for red and white-tipped kernels.'},
            { type: 'image', 
              src: './images/overlays/Corn/corn_color.jpg',
              caption: 'Corn kernels marked with their calculated tip color',
              alt: 'Image showing the corn kernels with their calculated tip color'
            },
          ])}
        />

        <Item
          url="images/main_page/Line_follower.jpg"
          scale={[w / 4, w / 5.5, 1]}
          position={[-w / 3.1, -h * 2.15, 0]}
          text={"Line Tracing with Robot Arm"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          planeWidth={w / 5}
          planeHeight={w / 5}
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'COURSE PROJECT: Robotics',
              mainTitle: 'Robot Line Tracing'  
            },
            { type: 'horizontalLine' },
            { type: 'paragraph', text: (
              <>The project aimed to integrate computer vision and robotics by using OpenCV for image processing, morphology techniques for line detection, inverse kinematics for precise motion control, and a fixed robotic arm equipped with a calibrated webcam. The goal was to enable the robot to capture, process, and accurately trace a line drawn on paper, showcasing the synergy between visual input and robotic manipulation.</>),
            },

            { type: 'paragraphheader', text: 'Approach' },
            { type: 'ordered-list', items: [
              <><strong>Image Processing and Line Detection: </strong> <br/> A webcam mounted on the robotic arm captures an image of the line drawn on a piece of paper. The image is processed to identify the line using grayscale conversion, noise reduction, adaptive thresholding, and skeletonization techniques. The result is a clear path representation that the robot needs to trace.</>,], 
            },

            { type: 'image', 
              src: [
                './images/overlays/Line tracer/original_picture.png',
                './images/overlays/Line tracer/grayscale.png',
                './images/overlays/Line tracer/black_white.png',
                './images/overlays/Line tracer/skeletonized.png',
              ],
              caption: [
                'Original image of the line path',
                'Grayscale image of the line path',
                'Binary image after thresholding and noise reduction',
                'Skeletonized image for line path extraction',
              ],
              alt: 'Images showing the different stages of image processing for line detection'
            },

            { type: 'ordered-list', items: [
              <><strong>Coordinate Extraction and Transformation: </strong><br/>The coordinates of the line path are extracted from the processed image. These coordinates, initially in pixel format, are converted to real-world measurements using scaling factors. Additional offsets are applied to align the coordinates with the robot’s coordinate system, ensuring accurate tracing.</>,
              
              <><strong>Inverse Kinematics for Motion Control: </strong><br/>The robot uses inverse kinematics to convert the target coordinates into joint angles required for positioning its end effector along the line path. This approach ensures precise movement, accounting for the robot’s geometry and constraints.</>,

              <><strong>Execution and Tracing: </strong><br/>The robot iterates through the path coordinates, moving its end effector to each target point sequentially. By using elbow-up or elbow-down configurations, the robot adjusts its posture to trace the line smoothly, demonstrating the ability to accurately replicate the line’s shape.</>,],
              start: 2
            },

            { type: 'paragraphheader', text: 'Final product' },
            {
              type: 'video',
              src: './images/overlays/Line tracer/solution.mp4',
              controls: true,
              autoplay: false,
            }
          ])}
        />
        <Item
          url="images/main_page/Shred2.png"
          scale={[w / 3, w / 10, 1]}
          position={[w / 4, -h * 1.65, 0]}
          text={"Reconstructing Shredded Images"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          planeWidth={w / 5}
          planeHeight={w / 5}
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'COURSE PROJECT: Image Processing',
              mainTitle: 'Reconstructing Shredded Images in Mathematica'  
            },
            { type: 'horizontalLine' },
            { type: 'paragraph', text: (
            <>Inspired by the legendary creativity of Leonardo Da Vinci, who once allegedly shredded his notebooks into strips to safeguard his ideas, this program was created to reverse the process. The challenge was to take a set of image fragments—shredded and randomly ordered—and reassemble them into their original, coherent form.
            </>),},

            { type: 'paragraphheader', text: 'Assignment details' },
            { type: 'paragraph', text: (
            <>The project involves solving a series of image-based puzzles where each puzzle consists of a set of shredded strips from an artwork. The goal is to write a program that can automatically reorder and reorient these strips to reconstruct the original artwork. The puzzles vary in difficulty:</>),},

            { type: 'unordered-list', items: [
            'Puzzles 1, 2, and 3 have 4 strips each.',
            'Puzzles 4, 5, and 6 have 6 strips each.',
            'Puzzles 7, 8, and 9 have 8 strips each.'],},

            { type: 'paragraphheader', text: 'The solution' },
            { type: 'paragraph', text:
              'To tackle the Shredded Da Vinci puzzles, I developed a workflow in Mathematica that reassemble the images from their shredded states. The core components include:'
            },

            { type: 'ordered-list', items: [
            <><strong>Edge Detection and Matching:</strong> The program extracts the edge slices (1px wide) of each image strip and compares them using a nearest neighbor algorithm, ensuring that each piece is correctly aligned with its adjacent fragment.</>,
            <><strong>Image Reassembly:</strong> Once the closest matche are determined, the strips are combined, and the new piece is added to the list of remaining pieces. This process continues until all strips are reassembled</>,],},

            { type: 'paragraphsubheader', text: 'Main function' },

            { type: 'code', language: 'mathematica', code: 
`(* Function: findClosestEdge
Description: Finds the closest edge of a given image slice to any edge in a list of remaining
Inputs:
  - currentImageSlices_List: A list of edges (slices) of the current image.
  - remaingSlices_List: A 2D list of edges from remaining images.
  - keys_List: A list of keys corresponding to images in remaingSlices.
Output: A tuple {closest key, index of closest edge, flag indicating if the closest edge is*)

findClosestEdge[currentImageSlices_List,remaingSlices_List,keys_List]:=Module[
  {currentLeftEdge,currentRightEdge,minDistance,minI,minJ,isRightEdge,distToLeftEdge,distToRightEdge,keyOfMinI},

  (*Initialize variables*)
  currentLeftEdge=currentImageSlices〚1〛;
  currentRightEdge=currentImageSlices〚2〛;
  minDistance=Infinity;
  minI=0;
  minJ=0;
  isRightEdge=False;

  (*Iterate over remaingSlices*)
  For[i=1,i≤Length[remaingSlices],i++,
    For[j=1,j≤4,j++,
      (*Compute distance to left edge*)
      distToLeftEdge=ImageDistance[currentLeftEdge,remaingSlices〚i〛〚j〛];
      If[distToLeftEdge<minDistance,
        minDistance=distToLeftEdge;
        minI=i;
        minJ=j;
        isRightEdge=True;
      ];

      (*Compute distance to right edge*)
      distToRightEdge=ImageDistance[currentRightEdge,remaingSlices〚i〛〚j〛];
      If[distToRightEdge<minDistance,
        minDistance=distToRightEdge;
        minI=i;
        minJ=j;
        isRightEdge=False;
      ];
    ];
  ];

  (*Get the key associated with minI*)
  keyOfMinI=keys〚minI〛;

  (*Return the results*)
  {keyOfMinI,minJ,isRightEdge}
]` 
              },

            { type: 'paragraphheader', text: 'Results' },
            { type: 'paragraph', text: (
            <>The program successfully solved a series of increasingly difficult puzzles, demonstrating its robustness and accuracy. It efficiently handled varying numbers of strips and orientations, producing fully reconstructed images for all test cases.</>),},
            { type: 'image', 
              src: './images/overlays/Davinci/Assembled_pictures1.jpg',
              caption: 'Reconstructed images from the Shredded Da Vinci puzzles',
              alt: 'Reconstructed images from the Shredded Da Vinci puzzles',
              size: 60,
            },
            
          ])}
        />

        <Item
          url="images/main_page/The_Seed.png"
          scale={[w / 2.5, w / 4.5, 1]}
          position={[w / 4, -h * 2.9, 0]}
          text={"The Seed: Award-Winning Platform for Refugee Integration"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          planeWidth={w / 3}
          planeHeight={w / 3}
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'SEMESTER PROJECT: Software Development in Bigger Teams',
              mainTitle: 'The Seed: Revolutionizing Refugee Integration'  
            },
            { type: 'horizontalLine' },
            { type: 'paragraph', text: 
            <>In our second year at the IT-University of Copenhagen, our team of six software development students and a Scrum Master embarked on a transformative journey with The Seed, a startup dedicated to integrating refugees into the Danish labor market. This project, which earned us the prestigious Nordea Quality Award for the Best 2nd Year Project in 2019, aimed to build a comprehensive platform that bridges the gap between refugee job seekers and Danish employers.</> },

            { type: 'paragraphheader', text: 'The Challenge' },
            { type: 'paragraph', text: 
              <>Our mission was to develop a platform where Danish companies could search through a database of refugee candidates, utilizing data from an external learning platform. However, midway through the project, we made a bold decision: instead of relying on a third-party learning system, we would create our own. This led us to the following goal statement: deliver a Minimum Viable Product (MVP) for The Seed that would:</> 
            },
            { type: 'unordered-list', items: [
              <>Enable administrators to manage data, user roles, and R scripts for analysis.</>,
              <>Allow employers to create profiles, post job openings, and browse candidates.</>,
              <>Facilitate the creation of a learning platform for refugees that integrates seamlessly with the job-matching system.</>,
            ],},

            { type: 'paragraph', text:
              'With three user roles:'
            },
            { type: 'unordered-list', items: [
              <><strong>Administrators:</strong> Managed the learning platform and back-end analytics, focusing on platform efficiency and business growth</>,
              <><strong>Employers:</strong> Utilized the job-matching portal to streamline recruitment and find qualified candidates quickly.</>,
              <><strong>Refugees:</strong> Engaged with the external learning platform to develop skills relevant to the Danish job market.</>,
              ],},

            { type: 'paragraphheader', text: 'Our Approach' },
            { type: 'paragraph', text:
            <>We adopted an agile development methodology, using Scrum to manage our sprints and deliverables. We conducted regular meetings with The Seed to ensure alignment with their vision and requirements, iterating on our designs based on their feedback. Our decision to build the learning platform in-house was a pivotal moment in the project, as it allowed us to create a more cohesive and integrated solution for both refugees and employers.</> },

            { type: 'paragraphsubheader', text: 
            <>Technologies used</> },

            { type: 'unordered-list', items: [
            <><strong>UX Testing:</strong> Adobe XD for prototyping and user experience design.</>,
            <><strong>Backend:</strong> Node.js, GraphQL, MySQL for robust and scalable data management.</>,
            <><strong>Frontend:</strong> React, SASS for a modern and responsive user interface.</>,
            <><strong>Deployment:</strong> Docker, Google Cloud, Kubernetes for seamless deployment and scalability.</>,
            ],},

            { type: 'image', 
              src: './images/overlays/The Seed/Xd1.png',
              caption: 'Interactive user interface prototype made in Adobe XD',
              alt: 'Image showing the interactive user interface prototype made in Adobe Xd',
            },
            { type: 'image', 
              src: './images/overlays/The Seed/Xd3.png',
              caption: 'The different screens and the flow between them',
              alt: 'Image showing the different screens in Adobe Xd and the flow between them',
            },

            { type: 'paragraphheader', text: 'Outcome' },
            { type: 'paragraph', text: 
            <>Our project not only met but exceeded the initial expectations of The Seed. By developing both the learning platform and the job-matching portal in-house, we provided a unified solution that enhances refugee integration into the labor market and supports employers in finding the right talent. This move - challenging the company on their initial thought - combined with the quality of our work, where recognised by the company, our university and Nordea, which awarded us the Nordea Quality Award for the best second year project 2018.</> },

            { type: 'image', 
              src: './images/overlays/The Seed/Poster final.jpg',
              caption: 'The Seed project poster showcasing the platform and its features',
              alt: 'Image showing the The Seed project poster showcasing the platform and its features',
            },
          ])}
        />

        <Item
          url="images/main_page/LIDAR.png"
          scale={[w / 4, w / 3.5, 1]}
          position={[w / 4.8, -h * 2.3, 0]}
          text={"Object Detection Using LIDAR"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#00BF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'COURSE PROJECT: Advanced Autonomous Robots',
              mainTitle: 'Shape and Rotation Detection Using LIDAR'  
            },

            { type: 'horizontalLine' },
            
            { type: 'paragraph', text: 
                <>Presented as our final solution for the Advanced Autonomous Robots course in Spring 2023, this project involved developing a robotic system capable of guidemark navigation, obstacle avoidance and object detection. I was in charge of developing the object detecting algorithm, which using a LIDAR, should be able to correctly recognize and differentiate between four specific objects: two sizes of squares and two sizes of triangles. Additionally, the algorithm should determine the orientation of these objects in radians. <br/>As one of the only groups, we where able to detect both the shape and orientation correctly, which ended up earning us a second place in the final competition.</> },

            { type: 'paragraphheader', text: (
                <>Object detection algorithm workflow</>),},

            { type: 'paragraphsubheader', text: (
                <>Scan Transformation/Filtering:</>),},

            { type: 'ordered-list', items: [
                'Convert scanline and distance data to polar coordinates.', 
                'Transform polar coordinates to local Cartesian coordinates.',
                'Convert local Cartesian coordinates to world coordinates.',
                'Filter out values outside the region of interest.', ], },

            { type: 'paragraphsubheader', text: (
                <>Object Number & Pose Detection:</>),},

            { type: 'ordered-list', items: [
                'Identify the closest laser scan point to the robot.',
                'Fit lines to laser scan points.', 
                'Convert line equations to Slope-Intercept Form (y = mx + b).', 
                'Optimize corner locations by finding intersections between lines.', 
                'Calculate distances and ratios between lines.', 
                'Determine object shape using line ratios.', 
                'Identify object number and position based on ratios and line lengths.', 
                'Assess object orientation relative to the x-axis in the world frame.',], },

            { type: 'image', 
              src: './images/overlays/LIDAR/LIDAR1.png',
              caption: 'The process of detecting and calculating the corner placement from LIDAR data',
              alt: 'Image showing the process of detecting and calculating the corner placement from LIDAR data',
            },

            { type: 'image', 
              src: './images/overlays/LIDAR/LIDAR2.png',
              caption: 'The four different object the robot has to be able to differentiate between, and the ratios between their sides',
              alt: 'Image showing the four different object the robot has to be able to differentiate between, and the ratios between their sides',
            },
          ])}
        />

        {/* Design Projects */}
        <PlaneItem
          planeColor="#FFBF00"
          planeWidth={w / 4}
          planeHeight={w / 6}
          position={[w / 3.6, -h * 3.815, -1]}
        />
        <Item
          url="images/main_page/Bord.jpg"
          scale={[w / 3, w / 3, 1]}
          position={[-w / 7, -h * 4.75, 0]}
          text={"Design and Construction of a Wood Table"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#FFBF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'DESIGN PROJECT:',
              mainTitle: 'The perfect wood study table with interchangable vinyl top'  
            },
            { type: 'horizontalLine' },
            { type: 'paragraphheader', text: 'Test' },
            { type: 'image', 
              src: './images/overlays/Bord/bord_blueprint.jpg',
              caption: 'Blueprint of the table', 
              alt: 'Image showing the blueprint of the table'},
            { type: 'image', 
              src: './images/overlays/Bord/bord_rendering.jpg',
              caption: 'Rendering of the table', 
              alt: 'Image showing the rendering of the table'},
            { type: 'image', 
              src: './images/overlays/Bord/bord_real.jpg',
              caption: 'The finished table', 
              alt: 'Image showing the finished table'},
          ])}
        />

        <Item
          url="images/main_page/Alive.jpg"
          scale={[w / 3.8, w / 3.0, 1]}
          position={[-w / 4, -h * 4.1, 0]}
          text={"Unge Drømme - Lighting installation at Alive Festival 2024"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#FFBF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'DESIGN PROJECT',
              mainTitle: 'Light and interior design for Unge Drømme'  
            },
            { type: 'horizontalLine' },

            { type: 'paragraph', text: 
            <>For the 2024 Alive Festival, I had the opportunity to create the lighting and interior design for the art installation <strong>Unge Drømme</strong> (Young Dreams) by Netværket af Ungdomsråd (NAU).</> },

            { type: 'paragraph', text: 
            <><strong>Unge Drømme</strong> is an ongoing project that explores the visions of young people for a fulfilling youth life, expressed through various forms of art such as rebellious poems, bold drawings, recorded speech and sensitive collages created in workshops held throughout Denmark. The installation aimed to bring these dreams to life through an immersive experience that combined light, sound, and interactive elements, and inspire the visitors to ponder about their dreams. Visitors were not only spectators but also participants, as they had the opportunity to record their own dream messages, potentially becoming part of NAU's future soundscapes.</> },

            { type: 'paragraph', text: 
            <>My focus for this project was to create an immersive lighting and room design that complemented the reflective and introspective nature of the project. Through smoke, laser light and black reflective surfaces, I tried to manipulate the perception of space, making the bunker feel larger and more fluid, erasing its harsh, confined reality, and hopefully giving the visitors a sense of stepping inside a brain/dream/different dimension—one where the dreams and aspirations of youth could take shape and come alive.</> },

            { type: 'paragraphheader', text: 'Read more about Unge Drømme' },
            { type: 'unordered-list', items: [
              <><a href="https://alivefestival.dk/kunst/unge-droemme/">www.alivefestival.dk/kunst/unge-droemme/</a><br/></>,
              <><a href="https://nau.dk/unge-dromme/">www.nau.dk/unge-dromme/</a><br/></>,
            ],}, 
          ])}
        />


        <Item
          url="images/main_page/TT1.jpg"
          scale={[w / 2, w / 2, 1]}
          position={[-w / 4, -h * 5.7, 0]}
          text={"Redesign of the dorm magazine Tietgen Times"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#FFBF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'DESIGN PROJECT',
              mainTitle: <>Redesigning Tietgen Times:<br />A Student-Run Magasine</>
            },
            { type: 'paragraph', text: 
            <>I led the redesign and established the visual identity of Tietgen Times, a student run magazine for the dorm Tietgen Kollegiet, after a hiatus, modernizing its layout and style. Besides establishing a new foundation for its layout and visual identity, I oversaw the layout of the first few editions following its revival, wrote a few articles, and where a part of the workgroup which where responsible for defining the magazine's content and editorial direction, in connection with the relaunch.</> },

            { type: 'image', 
              src: './images/overlays/Tietgen Times/Mockup1.jpg',
              caption: 'Article in the new design format', 
              alt: 'Image showing an article in the new design format'},
            { type: 'image', 
              src: './images/overlays/Tietgen Times/Mockup2.jpg',
              caption: 'Table of contents and editorial in the new design format', 
              alt: 'Image showing the table of contents and editorial in the new design format'},
            { type: 'image', 
              src: './images/overlays/Tietgen Times/TT2.jpg',
              caption: 'Frontpage in the new design format', 
              alt: 'Image showing the frontpage in the new design format'},
            
            { type: 'horizontalLine' },
            { type: 'paragraphheader', text: 'Read the magasines' },
            { type: 'unordered-list', items: [
              <><a href="https://issuu.com/christofferkolbeboye-hansen/docs/jpg2pdf">First edition after redesign (Ed. 2)</a><br/></>,
              <><a href="https://issuu.com/live10469">Edition 3-5 (Ed. 3: Layout by Maria Stampe, ed. 4-5: Layout by Thor O'Hagan Petersen)</a><br/></>,
              <><a href="https://issuu.com/tietgentimes">Edition 6-7 (Layout by Thor O'Hagan Petersen)</a><br/></>,
            ],},
          ])}
        />

        <Item
          url="images/main_page/Bodega.jpg"
          scale={[w / 2, w / 2, 1]}
          position={[w / 4, -h * 5.7, 0]}
          text={"Bodega Poster"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#FFBF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'DESIGN PROJECT',
              mainTitle: 'Map of pubs at the top of Amager'
            },
            { type: 'horizontalLine' },
            { type: 'image', 
              src: './images/overlays/Bodega/Poster-mockup.jpg', 
              boxShadow: false, 
              alt: 'Poster showing the location of pubs on top of Amager' 
            },
            { type: 'horizontalLine' },
            { type: 'paragraphheader', text: 'Buy the poster' },
            { type: 'paragraph', text: 'Stay tuned for link' },
            ])}
        />

        <Item
          url="images/main_page/Dåse.jpg"
          scale={[w / 3.5, w / 5.8, 1]}
          position={[w / 4, -h * 4.45, 0]}
          text={"Beer label design"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#FFBF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'DESIGN PROJECT',
              mainTitle: 'Beer label design for friends homebrew'
            },
            { type: 'horizontalLine' },
            { type: 'image', 
              src: './images/overlays/Beer label/label.jpg', 
              caption: 'Beer label design for Crimes Jungle Juice',
              alt: 'Image showing the beer label design'},
            { type: 'image', 
              src: './images/main_page/Dåse.jpg',
              caption: 'Mockup of the beer can with the label', 
              alt: 'Image showing a mockup of the beer can with the label'},
          ])}
        />

        <Item
          url="images/main_page/Reol.jpg"
          scale={[w / 4, w / 4, 1]}
          position={[-w / 4, -h * 6.55, 0]}
          text={"Wood shelf as a dorm room divider"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#FFBF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'DESIGN PROJECT',
              mainTitle: 'Wood shelf for pizza shaped dorm room'
            },

            { type: 'image', 
              src: './images/overlays/Reol/Inspiration.webp',
              caption: 'Inspiration for the shelf - Cobe Architects, Our Urban Living Room', 
              alt: '' },
            { type: 'horizontalLine' },
            { type: 'image', 
              src: [
                './images/overlays/Reol/reol1.jpg', 
                './images/overlays/Reol/reol2.jpg'
              ], 
              alt: 'Images showing the building process of the shelf', 
              caption: [
                'Building process of the shelf 1', 
                'Building process of the shelf 2'
              ], 
            },
            { type: 'image', 
              src: './images/overlays/Reol/reol3.jpg',
              caption: 'The finished shelf', 
              alt: 'Image showing the finished shelf'},
            
          ])}
        />

        <Item
          url="images/main_page/QUNival2.jpg"
          scale={[w / 2.1, w / 3.8, 1]}
          position={[w / 5, -h * 6.45, 0]}
          text={"Visual identity for QUNival"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#FFBF00"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'INSPIRATION: MIAMI VICE',
              mainTitle: 'Visual identity and content for small festival made with and for friends'  
            },
            { type: 'horizontalLine' },
            { type: 'image', src: './images/overlays/QUNival/Poster1.jpg', alt: '', caption: 'Poster for the festival' },
            { type: 'image', src: './images/overlays/QUNival/tegning.jpg', alt: '', caption: 'The process of reworking the original picture with my face for the poster' },
            { type: 'image', 
              src: [
                './images/overlays/QUNival/Theo1.jpg', 
                './images/overlays/QUNival/Theo2.jpg', 
              ],
              caption: [
                "Photo shoot picture with 80's effect 1",
                "Photo shoot picture with 80's effect 2",
              ],
            alt: 'Images showing the photo shoot pictures with 80s effect', 
          },
          { type: 'image', src: './images/overlays/QUNival/gif.gif', caption: 'Moving graphic for Facebook promotion', alt: 'Moving graphic for Facebook promotion' },
          ])}
        />


        {/* Other Projects */}
        <PlaneItem
          planeColor="#2219e1"
          planeWidth={w / 7}
          planeHeight={w / 7}
          position={[-w / 2.85, -h * 7.525, -1]}
        />
        <Item
          url="images/main_page/Giro.png"
          scale={[w / 4, w / 2.95, 1]}
          position={[w / 4, -h * 7.95, 0]}
          text={"Giro-413 helper"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#2219e1"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'GIRO-413 HELPER SOFTWARE',
              mainTitle: 'Real-Time Audio Management for Interactive Scout Race'  
            },
            { type: 'horizontalLine' },

            { type: 'paragraph', text: 
            <>Giro-413 is a race format designed to enhance competition, interaction, and engagement for the participants. In a Giro-413 race, each team has its own unique song. Points are tallied throughout the event, and the leading team's song is played, given the everyone a clear indication of who is in the lead. 
            </> },

            { type: 'paragraph', text: 
            <>The Giro-413 helper is a real-time audio management system developed to help the game organizers with song playing and score tracking. In races with many teams, keeping track of the standings and ensuring the right song is played can be difficult, especially when the lead changes rapidly. Faced with the challenge of managing a fast-paced race with over 100 participants, I developed this program using Electron and JavaScript. The system reads scores directly from an Excel sheet and automatically plays the song of the leading team, streamlining the process and enhancing the overall experience.</> },
            
            { type: 'horizontalLine' },
            { type: 'paragraphheader', text: 'Learn more and download program' },
            { type: 'unordered-list', items: [
              <a href="https://github.com/promillen/Giro-413-helper_Electron-JS">Source code and README</a>,
              <a href="https://github.com/promillen/Giro-413-helper_Electron-JS/blob/master/dist/Giro%20413%20Helper%201.0.0.exe">Compiled program for Windows</a>,
            ]},

            { type: 'paragraphheader', text: 'Screenshots' },
            { type: 'paragraphsubheader', text: 'Program' },
            { type: 'image', src: [
                './images/overlays/Giro-413/setup.png', 
                './images/overlays/Giro-413/customize.png', 
                './images/overlays/Giro-413/score.png',
              ],
              caption: [
                'Start screen - Program setup',
                'Customize screen - Assign team info (song and name)',
                'Main screen - Score overview',
              ], 
              alt: 'Images showing the different screens of the program, setup, customize team info and score overview' 
          },

            { type: 'paragraphsubheader', text: 'Excel file' },
            { type: 'image', src: './images/overlays/Giro-413/excel.png', caption: 'Example Excel sheet included with the program', alt: 'Image showing the example Excel sheet included with the program. Showcasing 3 entries, 2 teams and a live score as a coloumn diagram.' },
          ])}
        />

        <Item
          url="images/main_page/Monopoly.jpg"
          scale={[w / 3.5, w / 3.5, 1]}
          position={[-w / 5, -h * 8.15, 0]}
          text={"Beer Fridge Monopoly"}
          textColor={imgTextColor}
          textSize={textSize}
          planeColor="#2219e1"
          fontUrl={fontUrl}
          onClick={() => onImageClick([
            { type: 'header', 
              subtitle: 'BOARD GAME',
              mainTitle: 'Tietgen Drinking Edition Monopoly and Template'  
            },
            { type: 'horizontalLine' },

            { type: 'paragraph', text: (
                <>For a Tour de Chambre at my dorm kitchen, I created a special version of Monopoly that adds a fun, boozy twist to the classic game. Tietgen Drinking Edition Monopoly turns dorm kitchens into properties and beer into the currency, with drinking challenges sprinkled throughout for an extra dose of fun. The goal? Have fun player, while forcing others into going "tørlagte" (beer bankruptcy). With beer crates as houses, beer fridges as hotels, and quirky "Mail from Admin" cards, this game is all about strategy, luck, and a whole lot of laughs.<br />
                Below you will find downlink links to the gameboard, property and action cards, the rule book and also a rar file with templates, if you want to make own edition.</>),},

            { type: 'horizontalLine' },
            { type: 'paragraphheader', text: 'Download the Game'},

            { type: 'unordered-list', items: [
              <><a href="./dataFiles/Game board.pdf" target="_blank">Gameboard (printable version - PDF)</a><br/></>,
              <><a href="./dataFiles/Property cards for print.pdf" target="_blank">Property and action cards (printable version - PDF)</a><br/></>,
              <><a href="./dataFiles/Monopoly Game Rules.pdf" target="_blank">Rule book (PDF)</a><br/></>,
              <><a href="./dataFiles/Monopoly template files.zip">Template files (zip)</a><br/></>,
            ],},

            { type: 'paragraphheader', text: 'Product pictures'},
            { type: 'image', src: './images/main_page/Monopoly.jpg', caption: 'The gameboard', alt: 'Image showing the gameboard' },

            // { type: 'paragraphsubheader', text: 'Property card example'},
            { type: 'image', src: [
                './images/overlays/Monopoly/property_card1.jpg', 
                './images/overlays/Monopoly/property_card2.jpg', 
                './images/overlays/Monopoly/property_card3.jpg',
              ], 
              caption: [
                'Property card example 1',
                'Property card example 2',
                'Property card example 3',
              ],
            },

            // { type: 'paragraphsubheader', text: 'Action card (Mail from Admin) example' },
            { type: 'image', 
              src: './images/overlays/monopoly/action_card.jpg', 
              alt: 'Mail from admin: You have been collecting pant in the circle. Recieve 4 cl.',
              caption: 'Action card (mail from Admin) example' 
            },
          ])}
        />
      </group>
    </Scroll>
  );
}

export default ItemGallery;