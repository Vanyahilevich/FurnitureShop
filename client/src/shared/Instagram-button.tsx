import React from "react";
import { Link } from "react-router-dom";
import IconButton from "./icon-button";
import Tooltip from "./tooltip";

const InstagramButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link to="###">
      <Tooltip title={"Instagram"} direction="top">
        <IconButton onClick={onClick}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7233 12.2773L19.7005 11.7779L19.7004 11.7779L19.7233 12.2773ZM30.2746 12.2773L30.2975 11.7779L30.2973 11.7779L30.2746 12.2773ZM33.384 12.872L33.2031 13.3382L33.2032 13.3382L33.384 12.872ZM35.6506 14.348L35.2971 14.7016L35.2972 14.7017L35.6506 14.348ZM37.128 16.6155L37.5943 16.4352L37.5939 16.434L37.128 16.6155ZM37.7227 19.7222L38.2222 19.6998L38.2221 19.6988L37.7227 19.7222ZM37.7227 30.277L38.2221 30.3005L38.2222 30.2994L37.7227 30.277ZM37.128 33.3837L37.5939 33.5652L37.5944 33.5639L37.128 33.3837ZM35.6506 35.6509L35.2972 35.2972L35.2969 35.2976L35.6506 35.6509ZM33.3848 37.1283L33.2037 36.6622L33.2036 36.6622L33.3848 37.1283ZM30.2765 37.7229L30.2992 38.2224L30.2993 38.2224L30.2765 37.7229ZM19.7222 37.7229L19.6993 38.2224L19.6995 38.2224L19.7222 37.7229ZM16.615 37.1283L16.7961 36.6622L16.7961 36.6622L16.615 37.1283ZM14.3483 35.6509L14.702 35.2976L14.7018 35.2973L14.3483 35.6509ZM12.872 33.3834L12.406 33.5645L12.406 33.5645L12.872 33.3834ZM12.2773 30.2767L11.7778 30.2993L11.7779 30.2997L12.2773 30.2767ZM12.2771 19.7219L11.7776 19.6995L11.7776 19.6996L12.2771 19.7219ZM12.8717 16.6152L13.3376 16.7968L13.3376 16.7968L12.8717 16.6152ZM14.3491 14.348L14.7025 14.7017L14.7027 14.7015L14.3491 14.348ZM16.6166 12.872L16.7976 13.3381L16.7978 13.338L16.6166 12.872ZM1.5 25C1.5 12.0213 12.0213 1.5 25 1.5V0.5C11.469 0.5 0.5 11.469 0.5 25H1.5ZM25 48.5C12.0213 48.5 1.5 37.9787 1.5 25H0.5C0.5 38.531 11.469 49.5 25 49.5V48.5ZM48.5 25C48.5 37.9787 37.9787 48.5 25 48.5V49.5C38.531 49.5 49.5 38.531 49.5 25H48.5ZM25 1.5C37.9787 1.5 48.5 12.0213 48.5 25H49.5C49.5 11.469 38.531 0.5 25 0.5V1.5ZM25.0012 11.7C21.5223 11.7 21.0772 11.7152 19.7005 11.7779L19.746 12.7768C21.1 12.7152 21.5275 12.7 25.0012 12.7V11.7ZM24.9972 12.7H25.0012V11.7H24.9972V12.7ZM30.2973 11.7779C28.9207 11.7152 28.4772 11.7 24.9972 11.7V12.7C28.472 12.7 28.8978 12.7152 30.2519 12.7768L30.2973 11.7779ZM33.5648 12.4058C32.6922 12.0674 31.7073 11.8424 30.2975 11.7779L30.2517 12.7768C31.5672 12.8371 32.4437 13.0436 33.2031 13.3382L33.5648 12.4058ZM36.0042 13.9945C35.2399 13.2302 34.4679 12.7559 33.5647 12.4058L33.2032 13.3382C33.9854 13.6414 34.6374 14.0419 35.2971 14.7016L36.0042 13.9945ZM37.5939 16.434C37.2427 15.5326 36.7688 14.7585 36.0041 13.9943L35.2972 14.7017C35.9565 15.3605 36.3573 16.0147 36.6621 16.797L37.5939 16.434ZM38.2221 19.6988C38.1559 18.2891 37.9307 17.3052 37.5943 16.4352L36.6616 16.7958C36.9546 17.5536 37.1614 18.4299 37.2232 19.7457L38.2221 19.6988ZM38.3 25.0001C38.3 21.521 38.284 21.0761 38.2222 19.6998L37.2232 19.7446C37.284 21.099 37.3 21.5267 37.3 25.0001H38.3ZM38.2222 30.2994C38.284 28.9231 38.3 28.4793 38.3 25.0001H37.3C37.3 28.4736 37.284 28.9002 37.2232 30.2545L38.2222 30.2994ZM37.5944 33.5639C37.9307 32.6937 38.1559 31.7095 38.2221 30.3005L37.2232 30.2535C37.1614 31.5687 36.9546 32.4454 36.6616 33.2034L37.5944 33.5639ZM36.0041 36.0046C36.7688 35.2405 37.2427 34.4664 37.5939 33.5652L36.6621 33.2021C36.3573 33.9842 35.9565 34.6384 35.2972 35.2972L36.0041 36.0046ZM33.5658 37.5943C34.4678 37.2439 35.2409 36.7686 36.0044 36.0043L35.2969 35.2976C34.638 35.9572 33.9849 36.3587 33.2037 36.6622L33.5658 37.5943ZM30.2993 38.2224C31.7091 38.1578 32.6946 37.9329 33.5659 37.5943L33.2036 36.6622C32.446 36.9567 31.5692 37.1632 30.2536 37.2234L30.2993 38.2224ZM24.9996 38.3003C28.4788 38.3003 28.9225 38.2851 30.2992 38.2224L30.2537 37.2234C28.8997 37.2851 28.4736 37.3003 24.9996 37.3003V38.3003ZM19.6995 38.2224C21.0761 38.2851 21.521 38.3003 24.9996 38.3003V37.3003C21.5262 37.3003 21.099 37.2851 19.7449 37.2234L19.6995 38.2224ZM16.4338 37.5943C17.305 37.9329 18.2898 38.1578 19.6993 38.2224L19.7451 37.2234C18.4298 37.1632 17.5537 36.9567 16.7961 36.6622L16.4338 37.5943ZM13.9945 36.0043C14.7582 36.7688 15.5323 37.244 16.4339 37.5943L16.7961 36.6622C16.0149 36.3587 15.3608 35.9571 14.702 35.2976L13.9945 36.0043ZM12.406 33.5645C12.7564 34.4662 13.2304 35.2404 13.9948 36.0045L14.7018 35.2973C14.0427 34.6384 13.642 33.9844 13.338 33.2023L12.406 33.5645ZM11.7779 30.2997C11.8427 31.7095 12.0676 32.6939 12.406 33.5645L13.3381 33.2023C13.0438 32.4452 12.8373 31.5693 12.7768 30.2537L11.7779 30.2997ZM11.7 25.0001C11.7 28.4791 11.7155 28.9228 11.7778 30.2993L12.7768 30.2541C12.7155 28.8999 12.7 28.4738 12.7 25.0001H11.7ZM11.7776 19.6996C11.716 21.0759 11.7 21.521 11.7 25.0001H12.7C12.7 21.5267 12.716 21.0987 12.7766 19.7443L11.7776 19.6996ZM12.4059 16.4337C12.0663 17.3048 11.841 18.2899 11.7776 19.6995L12.7766 19.7444C12.8358 18.4297 13.0425 17.5539 13.3376 16.7968L12.4059 16.4337ZM13.9957 13.9943C13.231 14.7585 12.7571 15.5326 12.4059 16.4337L13.3376 16.7968C13.6424 16.0147 14.0432 15.3605 14.7025 14.7017L13.9957 13.9943ZM16.4356 12.4059C15.5338 12.7561 14.7596 13.2301 13.9955 13.9945L14.7027 14.7015C15.3616 14.0424 16.0156 13.6418 16.7976 13.3381L16.4356 12.4059ZM19.7004 11.7779C18.2906 11.8424 17.3061 12.0674 16.4353 12.406L16.7978 13.338C17.5548 13.0436 18.4306 12.8371 19.7462 12.7768L19.7004 11.7779Z"
              fill="currentColor"
            />
            <path
              d="M24.5746 14.5065L24.5744 15.0065H24.5745L24.5746 14.5065ZM23.853 14.5066H23.353V15.0074L23.8538 15.0066L23.853 14.5066ZM25.0013 14.5066L25.0011 15.0066H25.0013V14.5066ZM30.1736 14.5802L30.1964 14.0807L30.1963 14.0807L30.1736 14.5802ZM32.5501 15.021L32.7312 14.5549L32.7311 14.5549L32.5501 15.021ZM34.0211 15.9784L33.6674 16.3318L33.6675 16.3319L34.0211 15.9784ZM34.979 17.4504L35.445 17.2692L35.4449 17.269L34.979 17.4504ZM35.4198 19.8264L35.9193 19.8037L35.9192 19.8037L35.4198 19.8264ZM35.4198 30.1678L35.9192 30.1907L35.9193 30.1906L35.4198 30.1678ZM34.979 32.5439L34.5129 32.3627L34.5129 32.3629L34.979 32.5439ZM34.0211 34.0143L33.6676 33.6606L33.6675 33.6607L34.0211 34.0143ZM32.5501 34.9716L32.3692 34.5055L32.3682 34.5059L32.5501 34.9716ZM30.1736 35.4127L30.1963 35.9122L30.1964 35.9122L30.1736 35.4127ZM19.8289 35.4127L19.8059 35.9122L19.8062 35.9122L19.8289 35.4127ZM17.4521 34.9714L17.2711 35.4374L17.2712 35.4375L17.4521 34.9714ZM15.9801 34.014L15.6265 34.3676H15.6265L15.9801 34.014ZM15.0222 32.5428L14.5562 32.724L14.5563 32.7241L15.0222 32.5428ZM14.5814 30.1668L14.0819 30.1895L14.0819 30.1895L14.5814 30.1668ZM14.5814 19.8232L14.0819 19.8004L14.0819 19.8005L14.5814 19.8232ZM15.0222 17.4466L14.5561 17.2656L14.5561 17.2657L15.0222 17.4466ZM15.9801 15.9746L15.6265 15.6211H15.6265L15.9801 15.9746ZM17.4521 15.0168L17.6335 15.4827L17.6338 15.4826L17.4521 15.0168ZM19.8289 14.5754L19.8064 14.0759L19.806 14.0759L19.8289 14.5754ZM23.853 14.5034H24.353V14.0029L23.8524 14.0034L23.853 14.5034ZM31.8339 16.632V17.132H32.3339V16.632H31.8339ZM31.8339 16.6314V16.1314H31.3339V16.6314H31.8339ZM25.001 18.4267V17.9267H25.001L25.001 18.4267ZM24.5749 14.0065C24.3161 14.0064 24.0758 14.0063 23.8522 14.0066L23.8538 15.0066C24.0761 15.0063 24.3155 15.0064 24.5744 15.0065L24.5749 14.0065ZM25.0014 14.0066L24.5748 14.0065L24.5745 15.0065L25.0011 15.0066L25.0014 14.0066ZM30.1963 14.0807C28.835 14.0189 28.4208 14.0066 25.0013 14.0066V15.0066C28.417 15.0066 28.8129 15.0189 30.1509 15.0797L30.1963 14.0807ZM32.7311 14.5549C32.2303 14.3605 31.4996 14.1403 30.1964 14.0807L30.1507 15.0797C31.3436 15.1342 31.9676 15.3312 32.3692 15.4871L32.7311 14.5549ZM34.3747 15.6249C33.8774 15.1273 33.3926 14.8118 32.7312 14.5549L32.3691 15.4871C32.9024 15.6942 33.2693 15.9334 33.6674 16.3318L34.3747 15.6249ZM35.4449 17.269C35.1876 16.6081 34.8724 16.1225 34.3746 15.6248L33.6675 16.3319C34.0658 16.7302 34.3052 17.098 34.513 17.6318L35.4449 17.269ZM35.9192 19.8037C35.8599 18.5004 35.6395 17.7696 35.445 17.2692L34.5129 17.6316C34.6688 18.0325 34.866 18.6564 34.9203 19.8491L35.9192 19.8037ZM35.9944 24.9971C35.9944 21.5788 35.9811 21.1645 35.9193 19.8037L34.9203 19.8491C34.9811 21.187 34.9944 21.5833 34.9944 24.9971H35.9944ZM35.9193 30.1906C35.9811 28.8297 35.9944 28.4154 35.9944 24.9971H34.9944C34.9944 28.4109 34.9811 28.8073 34.9203 30.1451L35.9193 30.1906ZM35.445 32.725C35.6395 32.2246 35.8597 31.4938 35.9192 30.1907L34.9203 30.145C34.8657 31.3379 34.6688 31.9618 34.5129 32.3627L35.445 32.725ZM34.3745 34.3679C34.8719 33.8709 35.188 33.3867 35.445 32.7249L34.5129 32.3629C34.3059 32.8957 34.0663 33.2622 33.6676 33.6606L34.3745 34.3679ZM32.7311 35.4377C33.393 35.1808 33.8772 34.8653 34.3746 34.3678L33.6675 33.6607C33.269 34.0593 32.9025 34.2985 32.3692 34.5055L32.7311 35.4377ZM30.1964 35.9122C31.4992 35.8526 32.2308 35.6331 32.732 35.4374L32.3682 34.5059C31.9682 34.6621 31.344 34.8587 30.1507 34.9132L30.1964 35.9122ZM25.0013 35.9874C28.4211 35.9874 28.8355 35.974 30.1963 35.9122L30.1509 34.9132C28.813 34.974 28.4167 34.9874 25.0013 34.9874V35.9874ZM19.8062 35.9122C21.1671 35.974 21.5811 35.9874 25.0013 35.9874V34.9874C21.5856 34.9874 21.1895 34.974 19.8516 34.9132L19.8062 35.9122ZM17.2712 35.4375C17.7722 35.6319 18.5028 35.852 19.8059 35.9122L19.852 34.9132C18.6591 34.8582 18.035 34.6612 17.633 34.5052L17.2712 35.4375ZM15.6265 34.3676C16.1243 34.8653 16.6099 35.1807 17.2711 35.4374L17.6331 34.5053C17.0996 34.2981 16.7319 34.0587 16.3336 33.6605L15.6265 34.3676ZM14.5563 32.7241C14.8137 33.3857 15.129 33.8701 15.6265 34.3676L16.3336 33.6605C15.9351 33.262 15.6958 32.8952 15.4882 32.3615L14.5563 32.7241ZM14.0819 30.1895C14.1412 31.4928 14.3617 32.2236 14.5562 32.724L15.4882 32.3616C15.3324 31.9607 15.1352 31.3368 15.0809 30.144L14.0819 30.1895ZM14.0078 24.9939C14.0078 28.414 14.0201 28.8285 14.0819 30.1895L15.0809 30.1441C15.0201 28.8064 15.0078 28.4102 15.0078 24.9939H14.0078ZM14.0819 19.8005C14.0201 21.1615 14.0078 21.5738 14.0078 24.9939H15.0078C15.0078 21.5777 15.0201 21.1836 15.0809 19.8459L14.0819 19.8005ZM14.5561 17.2657C14.3617 17.7665 14.1415 18.4972 14.0819 19.8004L15.0809 19.846C15.1354 18.6532 15.3324 18.0292 15.4883 17.6276L14.5561 17.2657ZM15.6265 15.6211C15.129 16.1186 14.813 16.6042 14.5561 17.2656L15.4883 17.6277C15.6954 17.0944 15.9352 16.7267 16.3336 16.3282L15.6265 15.6211ZM17.2707 14.5508C16.6098 14.8081 16.1243 15.1233 15.6265 15.6211L16.3336 16.3282C16.7319 15.9299 17.0997 15.6905 17.6335 15.4827L17.2707 14.5508ZM19.806 14.0759C18.5032 14.1358 17.772 14.3553 17.2704 14.5509L17.6338 15.4826C18.0346 15.3262 18.6586 15.1297 19.8519 15.0749L19.806 14.0759ZM23.8524 14.0034C21.462 14.0061 20.9967 14.0222 19.8064 14.0759L19.8515 15.0749C21.0228 15.022 21.4727 15.0061 23.8535 15.0034L23.8524 14.0034ZM24.353 14.5066V14.5034H23.353V14.5066H24.353ZM30.7978 18.1675C30.7978 17.5956 31.2617 17.132 31.8339 17.132V16.132C30.71 16.132 29.7978 17.0428 29.7978 18.1675H30.7978ZM31.8339 19.2035C31.262 19.2035 30.7978 18.7393 30.7978 18.1675H29.7978C29.7978 19.2916 30.7097 20.2035 31.8339 20.2035V19.2035ZM32.8699 18.1675C32.8699 18.7393 32.4057 19.2035 31.8339 19.2035V20.2035C32.958 20.2035 33.8699 19.2916 33.8699 18.1675H32.8699ZM31.8339 17.1314C32.4057 17.1314 32.8699 17.5956 32.8699 18.1675H33.8699C33.8699 17.0433 32.958 16.1314 31.8339 16.1314V17.1314ZM32.3339 16.632V16.6314H31.3339V16.632H32.3339ZM25.001 17.9267C21.0948 17.9268 17.9279 21.0938 17.9279 25.0001H18.9279C18.9279 21.6461 21.6471 18.9268 25.001 18.9267L25.001 17.9267ZM32.0736 25.0001C32.0736 21.0938 28.9074 17.9267 25.001 17.9267V18.9267C28.3549 18.9267 31.0736 21.646 31.0736 25.0001H32.0736ZM25.0013 32.0721C28.9075 32.0721 32.0736 28.9064 32.0736 25.0001H31.0736C31.0736 28.3541 28.3553 31.0721 25.0013 31.0721V32.0721ZM17.9279 25.0001C17.9279 28.9065 21.0951 32.0721 25.0013 32.0721V31.0721C21.6471 31.0721 18.9279 28.354 18.9279 25.0001H17.9279Z"
              fill="currentColor"
            />
            <path
              d="M25.0011 20.7334C27.3574 20.7334 29.2678 22.6436 29.2678 25.0001C29.2678 27.3564 27.3574 29.2668 25.0011 29.2668C22.6445 29.2668 20.7344 27.3564 20.7344 25.0001C20.7344 22.6436 22.6445 20.7334 25.0011 20.7334V20.7334Z"
              stroke="currentColor"
            />
          </svg>
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default InstagramButton;
