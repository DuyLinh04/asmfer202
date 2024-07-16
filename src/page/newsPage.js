import React from 'react';
import { Tab, Tabs } from 'react-materialize';

export default function NewsPage() {
  return (
    <div>
      <Tabs
      // className={`tab-demo z-depth-1 `}
      // scope="tabs-22"
      >
        <Tab
          active
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title={<div style={{ color: 'black' }}>Hot News</div>}
        >
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Orchids' Remarkable Evolution</h5>
            <p>
              Orchids have a fascinating evolutionary history, having
              independently evolved the ability to grow on other plants multiple
              times. This unique adaptation, known as epiphytism, allows them to
              thrive in diverse environments ranging from tropical rainforests
              to arid deserts. Recent studies have highlighted the genetic and
              environmental factors contributing to this evolution, offering
              deeper insights into orchid biology and resilience.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>The Connecticut Orchid Show</h5>
            <p>
              The Connecticut Orchid Society's "Spring Into Orchids" show is a
              highly anticipated event featuring a vast array of miniature
              orchids. Held annually, this event offers enthusiasts the chance
              to see and purchase unique species from around the world. The show
              not only showcases beautiful orchids but also promotes
              conservation efforts through education and plant sales.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Bonnet House Orchid Festival</h5>
            <p>
              The Bonnet House in Florida hosts an annual International Orchid &
              Garden Festival, featuring a variety of orchid species and
              gardening supplies. The event includes interactive lectures,
              tropical luau lunches, and live performances, making it a cultural
              as well as botanical highlight. This festival is a must-visit for
              orchid lovers and offers a great opportunity to learn about and
              purchase rare orchids.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>San Diego Orchid Society Show</h5>
            <p>
              The San Diego County Orchid Society's spring show, themed "Orchids
              of the Earth," takes place just before Earth Day. This event in
              Balboa Park features hundreds of orchids on display and for sale,
              with contributions from local and international growers. The show
              includes educational sessions on orchid care and conservation
              efforts, attracting both novice and experienced growers.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>State of the World's Orchids</h5>
            <p>
              A recent report by CSIRO revealed significant findings about the
              global status of orchids. This comprehensive study emphasizes the
              need for increased conservation efforts to protect these diverse
              plants, particularly in threatened habitats like karst forests.
              The report highlights ongoing challenges and the importance of
              sustainable practices to ensure the survival of orchid species
              worldwide.
            </p>
          </div>
        </Tab>
        <Tab
          options={{
            duration: 300,
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title={<div style={{ color: 'black' }}>Fake News</div>}
          className={`news-content`}
        >
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Cleveland Botanical Garden Orchid Show</h5>
            <p>
              The Cleveland Botanical Garden hosts "Orchids Forever," an event
              that transforms the garden into a stunning display of orchids from
              around the globe. Visitors can enjoy the beauty of these exotic
              flowers, participate in educational programs, and purchase plants
              from local vendors. This annual show is a major attraction for
              both horticulturists and the general public.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Orchid Conservation Efforts</h5>
            <p>
              Conservation initiatives for orchids are crucial due to their
              ecological and economic importance. Many organizations are
              involved in preserving orchid habitats and promoting sustainable
              cultivation practices. Efforts include habitat restoration,
              research on orchid biology, and public education campaigns to
              raise awareness about the threats faced by these plants.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Orchid Hybrids and Breeding</h5>
            <p>
              Orchid hybridization is a popular practice among growers, leading
              to the development of new and resilient varieties. Hybrid orchids
              often combine desirable traits from different species, resulting
              in unique colors, patterns, and growth habits. This practice not
              only enhances the aesthetic appeal of orchids but also contributes
              to their adaptability and survival.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Orchid Shows and Sales</h5>
            <p>
              Orchid shows and sales are vibrant events that bring together
              growers, enthusiasts, and the public. These events often feature
              competitions, workshops, and lectures on orchid care and
              cultivation. They provide a platform for sharing knowledge,
              showcasing rare species, and promoting the hobby of orchid
              growing.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Orchid Research Advances</h5>
            <p>
              Recent advances in orchid research have uncovered new insights
              into their genetic diversity, reproductive strategies, and
              ecological roles. Studies on orchid pollination mechanisms,
              symbiotic relationships with fungi, and adaptations to various
              environments are helping scientists understand how to better
              protect and cultivate these plants.
            </p>
          </div>
        </Tab>
        <Tab
          options={{
            duration: 300, //thời lượng chuyển tab = 3s
            onShow: null,
            responsiveThreshold: Infinity,
            swipeable: false,
          }}
          title={<div style={{ color: 'black' }}>Not News</div>}
          className={`news-content`}
        >
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Orchid Festivals Around the World</h5>
            <p>
              Orchid festivals are celebrated globally, each offering a unique
              glimpse into the world of orchids. From the Bonnet House Festival
              in Florida to international events in Asia and Europe, these
              festivals highlight the cultural and botanical significance of
              orchids. They attract tourists, researchers, and plant lovers,
              fostering a global appreciation for these extraordinary flowers.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Importance of Orchid Education</h5>
            <p>
              Educational initiatives are essential for promoting orchid
              conservation and cultivation. Many botanical gardens, societies,
              and universities offer courses, workshops, and resources on orchid
              care. These programs aim to inspire new generations of orchid
              enthusiasts and equip them with the knowledge needed to grow and
              protect these plants.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Conservation Efforts for Orchids</h5>
            <p>
              A recent report highlights the increasing urgency for orchid
              conservation, particularly for species with narrow geographic
              ranges. In Australia, 23 threatened orchid species were added to
              the International Union for Conservation of Nature (IUCN) Red
              List, bringing the total to 51. This initiative aims to raise
              awareness about the rich diversity of terrestrial orchids in
              Australia and to secure international funding for their
              conservation. The inclusion of these species on the Red List
              underscores the need for continued efforts to protect orchid
              habitats from threats like habitat destruction and climate change.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Evolutionary Insights into Orchids</h5>
            <p>
              A new study has revealed fascinating insights into the
              evolutionary history of orchids. Researchers have discovered that
              the ability of orchids to grow on other plants, known as
              epiphytism, evolved independently at least 14 times. This trait,
              which supports biodiversity in rainforests, first appeared around
              55 million years ago, shortly after the extinction of the
              dinosaurs. The study, which included genetic data from over 400
              orchid species, helps scientists understand the evolutionary
              relationships among orchids and can inform conservation strategies
              by identifying key regions for orchid diversity.
            </p>
          </div>
          <div
            className={`news-info`}
            style={{
              backgroundColor: '#dedcd8',
              marginTop: 20,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <h5>Global Orchid Diversity and Speciation</h5>
            <p>
              An international study has mapped the global diversity of orchids,
              identifying regions with high species richness and evolutionary
              potential. This research is critical for prioritizing ecosystems
              for conservation. Orchids, which have taken millions of years to
              evolve, are now facing rapid extinction rates. Protecting these
              regions can help safeguard the future of orchids and maintain
              their role in ecosystems. The study also aims to construct a
              comprehensive "tree of life" for orchids, which will serve as a
              model for understanding speciation and extinction across various
              ecosystems.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
