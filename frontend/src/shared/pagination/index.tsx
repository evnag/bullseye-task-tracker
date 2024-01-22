
interface Props {
  currentPage: number;
  totalPages: number;
  handleNextPage: (page: number) => void;
  handlePrevPage: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage
}: Props) {
  return (
    <div className="pagination-btn-wrapper">
        <button 
            className="pagination-btn"
            onClick={() => handlePrevPage(currentPage)}
            disabled={currentPage===1}
        >
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" 
	        viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M168.837,256L388.418,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L123.582,240.915
                            c-8.331,8.331-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17
                            L168.837,256z"/>
                    </g>
                </g>
            </svg>
        </button>
        <span>
            {currentPage} из {totalPages}
        </span>
        <button 
            className="pagination-btn"
            onClick={() => handleNextPage(currentPage)}
            disabled={currentPage===totalPages}
        >
            <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" 
	        viewBox="0 0 512 512">
                <g>
                    <g>
                        <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256
                            L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667
                            C396.749,262.754,396.749,249.246,388.418,240.915z"/>
                    </g>
                </g>
            </svg>
        </button>
    </div>
  )
}