// ➜ To add, remove, or edit a project, change this list.
// "image" and "github" are optional.
import mvImage from './assets/mvImage.png'
import matrixI from './assets/matrixI.webp'
import recursiveSearch from './assets/recursive_search.png'
import atlasLogo from './assets/atlas-sports-logo-crop.webp'
import pca from './assets/PCA.png'

const projects = [
  {
    name: 'Portfolio Optimization with Mean Variance',
    description:
      'Used to test effectivenss of Modern Portfolio theory based on historical price data',
    image: mvImage,
    github: 'https://github.com/elee05/Portfolio-Optimization-with-Mean-Variance',
  },
  {
    name: 'Statistcal Arbitrage with Pairs Trading App',
    description:
      'Fully functional Streamlit-based statistical arbitrage application that uses Principal Component Analysis (PCA) and clustering techniques to identify cointegrated stock pairs and test long-short trading strategies on S&P 500 stocks.',
    image: pca,
    github: 'https://github.com/elee05/StockPairAnalysis',
  },
  {
    name: 'Atlas Sports',
    description:
      'mobile communications app for young sports teams specifically designed for new players',
    image: atlasLogo,
  },
  {
    name: 'Optimized Matrix Multiplcation Algorithm',
    description:
      'Repo built during my time taking a linear algebra course. Used to help visualize vectors in 2D and 3D space and implements Matrix Algebra',
    image: matrixI,
    github: 'https://github.com/elee05/Matrix-Algebra',
  },
  {
    name: 'YQuantum Hackathon Minimum Independent Set Submission',
    description:
      'We were tasked with developing and comparing classical and quantum computing algorithms to the MIS problem of coloring nodes',
    image: recursiveSearch,
    github: 'https://github.com/elee05/yquantum-2025-travelers-capgemini',
  },
  {
    name: 'Connect 4 Simulator',
    description:
      'Fun terminal project using ASCII graphics built with Python. Supports 2 player and single player. Integrated AI opponent which implements recursive backtracking to predict best move.',
    github: 'https://github.com/elee05/ASCII-Connect-Four',
  },
  {
    name: '8 Puzzle Solver',
    description:
      'Designed and developed an 8 puzzle solving algorithm in Python which uses a state space search method and heuristic function. Algorithm is based on based on quantity and degree of displaced positions. Capable of solving most complex permutations with 31 optimal moves to solve.',
    github: 'https://github.com/elee05/8-puzzle-solver',
  },
  {
    name: 'Personal Tokenizer',
    description:
      'Part of my ongoing crusade to devlop deeper knowledge of NLPs:Small scale tokenizer trained on Shakespear. Capable of holding up to 800 unique tokens',
    github: 'https://github.com/elee05/Tokenizer/tree/main',
  },
]

export default projects
