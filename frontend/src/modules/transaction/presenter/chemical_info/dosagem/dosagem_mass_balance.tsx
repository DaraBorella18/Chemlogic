import { CardBody, Text } from '@chakra-ui/react';
import MassBalanceSubtitle from '../../components/mass_balance/mass_balance_subtitle';

const DosagemMassBalance: React.FC = () => {
  const tableData = {
    'Q<sub>AD</sub>': 'Vazão de água de entrada',
    'Q<sub>AF</sub>': 'Vazão de água filtrada',
    'Q<sub>D</sub>': 'Vazão de desinfectante',
    'Q<sub>F</sub>': 'Vazão de flúor',
    'Q<sub>RL</sub>': 'Vazão de retrolavagem dos filtros',
  };
  return (
    <CardBody>
      <svg
        style={{ margin: '0 auto' }}
        width="300"
        height="200"
        viewBox="0 0 1625 833"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="88.5" y="286.5" width="916" height="577" stroke="black" strokeWidth="3" strokeDasharray="50 50" />
        <path
          d="M192.782 23.96C192.782 21.1867 193.251 18.4773 194.19 15.832C195.171 13.144 196.579 10.712 198.414 8.536C200.248 6.31733 202.51 4.568 205.198 3.288C207.886 1.96533 210.936 1.304 214.35 1.304C218.403 1.304 221.859 2.24266 224.718 4.12C227.619 5.95466 229.752 8.32266 231.118 11.224L227.598 13.4C226.616 11.3947 225.379 9.816 223.886 8.664C222.392 7.46933 220.792 6.616 219.086 6.104C217.422 5.592 215.758 5.336 214.094 5.336C211.363 5.336 208.952 5.89067 206.862 7C204.771 8.06667 203 9.51733 201.55 11.352C200.142 13.144 199.075 15.1707 198.35 17.432C197.624 19.6507 197.262 21.912 197.262 24.216C197.262 26.7333 197.688 29.144 198.542 31.448C199.395 33.752 200.59 35.8 202.126 37.592C203.662 39.3413 205.454 40.7493 207.502 41.816C209.592 42.84 211.854 43.352 214.286 43.352C215.992 43.352 217.742 43.0533 219.534 42.456C221.326 41.8587 222.99 40.9413 224.526 39.704C226.104 38.4667 227.363 36.8667 228.302 34.904L232.014 36.824C231.075 39.0853 229.624 41.0053 227.662 42.584C225.699 44.1627 223.502 45.3573 221.07 46.168C218.68 46.9787 216.334 47.384 214.03 47.384C210.915 47.384 208.056 46.7227 205.454 45.4C202.851 44.0347 200.59 42.2427 198.67 40.024C196.792 37.7627 195.342 35.2453 194.318 32.472C193.294 29.656 192.782 26.8187 192.782 23.96ZM238.961 0.279999H243.313V39.448C243.313 41.112 243.611 42.2 244.209 42.712C244.806 43.224 245.531 43.48 246.385 43.48C247.153 43.48 247.921 43.3947 248.689 43.224C249.457 43.0533 250.118 42.8827 250.673 42.712L251.441 46.232C250.63 46.5733 249.627 46.8507 248.433 47.064C247.281 47.2773 246.278 47.384 245.425 47.384C243.462 47.384 241.883 46.808 240.689 45.656C239.537 44.504 238.961 42.9253 238.961 40.92V0.279999ZM270.414 47.64C268.025 47.64 265.806 47.192 263.758 46.296C261.753 45.3573 260.004 44.0987 258.51 42.52C257.06 40.8987 255.929 39.064 255.118 37.016C254.308 34.9253 253.902 32.728 253.902 30.424C253.902 28.0347 254.308 25.816 255.118 23.768C255.929 21.6773 257.081 19.8427 258.574 18.264C260.068 16.6427 261.817 15.384 263.822 14.488C265.87 13.5493 268.089 13.08 270.478 13.08C272.868 13.08 275.065 13.5493 277.07 14.488C279.076 15.384 280.825 16.6427 282.318 18.264C283.812 19.8427 284.964 21.6773 285.774 23.768C286.585 25.816 286.99 28.0347 286.99 30.424C286.99 32.728 286.585 34.9253 285.774 37.016C284.964 39.064 283.812 40.8987 282.318 42.52C280.868 44.0987 279.118 45.3573 277.07 46.296C275.065 47.192 272.846 47.64 270.414 47.64ZM258.318 30.488C258.318 32.9627 258.852 35.224 259.918 37.272C261.028 39.2773 262.5 40.8773 264.334 42.072C266.169 43.224 268.196 43.8 270.414 43.8C272.633 43.8 274.66 43.2027 276.494 42.008C278.329 40.8133 279.801 39.192 280.91 37.144C282.02 35.0533 282.574 32.792 282.574 30.36C282.574 27.8853 282.02 25.624 280.91 23.576C279.801 21.528 278.329 19.9067 276.494 18.712C274.66 17.5173 272.633 16.92 270.414 16.92C268.196 16.92 266.169 17.5387 264.334 18.776C262.542 20.0133 261.092 21.656 259.982 23.704C258.873 25.7093 258.318 27.9707 258.318 30.488ZM310.909 17.496C308.007 17.5813 305.447 18.392 303.229 19.928C301.053 21.464 299.517 23.576 298.621 26.264V47H294.269V13.656H298.365V21.656C299.517 19.3093 301.031 17.4107 302.909 15.96C304.829 14.5093 306.855 13.6987 308.989 13.528C309.415 13.4853 309.778 13.464 310.077 13.464C310.418 13.464 310.695 13.4853 310.909 13.528V17.496ZM329.852 47.64C327.462 47.64 325.244 47.192 323.196 46.296C321.19 45.3573 319.441 44.0987 317.948 42.52C316.497 40.8987 315.366 39.064 314.556 37.016C313.745 34.9253 313.34 32.728 313.34 30.424C313.34 28.0347 313.745 25.816 314.556 23.768C315.366 21.6773 316.518 19.8427 318.012 18.264C319.505 16.6427 321.254 15.384 323.26 14.488C325.308 13.5493 327.526 13.08 329.916 13.08C332.305 13.08 334.502 13.5493 336.508 14.488C338.513 15.384 340.262 16.6427 341.756 18.264C343.249 19.8427 344.401 21.6773 345.212 23.768C346.022 25.816 346.428 28.0347 346.428 30.424C346.428 32.728 346.022 34.9253 345.212 37.016C344.401 39.064 343.249 40.8987 341.756 42.52C340.305 44.0987 338.556 45.3573 336.508 46.296C334.502 47.192 332.284 47.64 329.852 47.64ZM317.756 30.488C317.756 32.9627 318.289 35.224 319.356 37.272C320.465 39.2773 321.937 40.8773 323.772 42.072C325.606 43.224 327.633 43.8 329.852 43.8C332.07 43.8 334.097 43.2027 335.932 42.008C337.766 40.8133 339.238 39.192 340.348 37.144C341.457 35.0533 342.012 32.792 342.012 30.36C342.012 27.8853 341.457 25.624 340.348 23.576C339.238 21.528 337.766 19.9067 335.932 18.712C334.097 17.5173 332.07 16.92 329.852 16.92C327.633 16.92 325.606 17.5387 323.772 18.776C321.98 20.0133 320.529 21.656 319.42 23.704C318.31 25.7093 317.756 27.9707 317.756 30.488Z"
          fill="black"
        />
        <path
          d="M402.884 47V1.56H432.708V5.528H407.364V22.232H428.74V25.944H407.364V47H402.884ZM439.867 0.279999H444.219V39.448C444.219 41.112 444.518 42.2 445.115 42.712C445.712 43.224 446.438 43.48 447.291 43.48C448.059 43.48 448.827 43.3947 449.595 43.224C450.363 43.0533 451.024 42.8827 451.579 42.712L452.347 46.232C451.536 46.5733 450.534 46.8507 449.339 47.064C448.187 47.2773 447.184 47.384 446.331 47.384C444.368 47.384 442.79 46.808 441.595 45.656C440.443 44.504 439.867 42.9253 439.867 40.92V0.279999ZM456.793 33.24V13.656H461.145V32.472C461.145 36.2693 461.785 39.1067 463.065 40.984C464.387 42.8613 466.329 43.8 468.889 43.8C470.595 43.8 472.238 43.4373 473.817 42.712C475.438 41.944 476.867 40.8773 478.105 39.512C479.342 38.104 480.281 36.4827 480.921 34.648V13.656H485.273V41.752C485.273 42.3493 485.401 42.7973 485.657 43.096C485.913 43.352 486.297 43.5013 486.809 43.544V47C486.297 47.0427 485.891 47.064 485.593 47.064C485.294 47.1067 485.017 47.128 484.761 47.128C483.907 47.0427 483.161 46.7013 482.521 46.104C481.923 45.5067 481.603 44.7813 481.561 43.928L481.433 39.448C479.982 42.008 477.998 44.0133 475.481 45.464C473.006 46.9147 470.318 47.64 467.417 47.64C463.918 47.64 461.273 46.424 459.481 43.992C457.689 41.56 456.793 37.976 456.793 33.24ZM472.409 7.32L469.529 6.232L473.305 0.279999H477.913L472.409 7.32ZM509.321 47.64C506.931 47.64 504.713 47.192 502.665 46.296C500.659 45.3573 498.91 44.0987 497.417 42.52C495.966 40.8987 494.835 39.064 494.025 37.016C493.214 34.9253 492.809 32.728 492.809 30.424C492.809 28.0347 493.214 25.816 494.025 23.768C494.835 21.6773 495.987 19.8427 497.481 18.264C498.974 16.6427 500.723 15.384 502.729 14.488C504.777 13.5493 506.995 13.08 509.385 13.08C511.774 13.08 513.971 13.5493 515.977 14.488C517.982 15.384 519.731 16.6427 521.225 18.264C522.718 19.8427 523.87 21.6773 524.681 23.768C525.491 25.816 525.897 28.0347 525.897 30.424C525.897 32.728 525.491 34.9253 524.681 37.016C523.87 39.064 522.718 40.8987 521.225 42.52C519.774 44.0987 518.025 45.3573 515.977 46.296C513.971 47.192 511.753 47.64 509.321 47.64ZM497.225 30.488C497.225 32.9627 497.758 35.224 498.825 37.272C499.934 39.2773 501.406 40.8773 503.241 42.072C505.075 43.224 507.102 43.8 509.321 43.8C511.539 43.8 513.566 43.2027 515.401 42.008C517.235 40.8133 518.707 39.192 519.817 37.144C520.926 35.0533 521.481 32.792 521.481 30.36C521.481 27.8853 520.926 25.624 519.817 23.576C518.707 21.528 517.235 19.9067 515.401 18.712C513.566 17.5173 511.539 16.92 509.321 16.92C507.102 16.92 505.075 17.5387 503.241 18.776C501.449 20.0133 499.998 21.656 498.889 23.704C497.779 25.7093 497.225 27.9707 497.225 30.488ZM549.815 17.496C546.914 17.5813 544.354 18.392 542.135 19.928C539.959 21.464 538.423 23.576 537.527 26.264V47H533.175V13.656H537.271V21.656C538.423 19.3093 539.938 17.4107 541.815 15.96C543.735 14.5093 545.762 13.6987 547.895 13.528C548.322 13.4853 548.684 13.464 548.983 13.464C549.324 13.464 549.602 13.4853 549.815 13.528V17.496Z"
          fill="black"
        />
        <path
          d="M189.776 529.56H193.552L212.432 575H207.696L201.808 560.792H181.392L175.568 575H170.768L189.776 529.56ZM200.784 557.272L191.632 534.808L182.352 557.272H200.784ZM193.168 523.352L190.288 522.264L194.064 516.312H198.672L193.168 523.352ZM230.489 575.448C228.227 575.448 226.137 574.979 224.217 574.04C222.297 573.101 220.633 571.843 219.225 570.264C217.859 568.643 216.793 566.808 216.025 564.76C215.257 562.712 214.873 560.6 214.873 558.424C214.873 556.077 215.235 553.88 215.961 551.832C216.729 549.741 217.795 547.885 219.161 546.264C220.569 544.643 222.211 543.384 224.089 542.488C225.966 541.549 228.057 541.08 230.361 541.08C233.219 541.08 235.694 541.805 237.785 543.256C239.918 544.707 241.71 546.499 243.161 548.632V541.656H247.065V575.128C247.065 578.2 246.318 580.781 244.825 582.872C243.374 585.005 241.39 586.605 238.873 587.672C236.398 588.739 233.689 589.272 230.745 589.272C226.947 589.272 223.875 588.589 221.529 587.224C219.182 585.859 217.262 584.024 215.769 581.72L218.457 579.608C219.779 581.699 221.529 583.256 223.705 584.28C225.923 585.304 228.27 585.816 230.745 585.816C232.921 585.816 234.905 585.411 236.697 584.6C238.531 583.832 239.982 582.659 241.049 581.08C242.158 579.501 242.713 577.517 242.713 575.128V568.536C241.433 570.627 239.683 572.312 237.465 573.592C235.246 574.829 232.921 575.448 230.489 575.448ZM231.705 571.8C233.027 571.8 234.286 571.565 235.481 571.096C236.718 570.627 237.849 570.008 238.873 569.24C239.897 568.429 240.75 567.533 241.433 566.552C242.115 565.571 242.542 564.568 242.713 563.544V553.24C242.073 551.619 241.155 550.189 239.961 548.952C238.766 547.672 237.401 546.691 235.865 546.008C234.371 545.283 232.814 544.92 231.193 544.92C229.315 544.92 227.63 545.325 226.137 546.136C224.686 546.904 223.449 547.949 222.425 549.272C221.443 550.552 220.675 552.003 220.121 553.624C219.566 555.245 219.289 556.867 219.289 558.488C219.289 560.28 219.609 561.987 220.249 563.608C220.889 565.187 221.763 566.616 222.873 567.896C224.025 569.133 225.347 570.093 226.841 570.776C228.377 571.459 229.998 571.8 231.705 571.8ZM256.355 561.24V541.656H260.707V560.472C260.707 564.269 261.347 567.107 262.627 568.984C263.95 570.861 265.891 571.8 268.451 571.8C270.158 571.8 271.8 571.437 273.379 570.712C275 569.944 276.43 568.877 277.667 567.512C278.904 566.104 279.843 564.483 280.483 562.648V541.656H284.835V569.752C284.835 570.349 284.963 570.797 285.219 571.096C285.475 571.352 285.859 571.501 286.371 571.544V575C285.859 575.043 285.454 575.064 285.155 575.064C284.856 575.107 284.579 575.128 284.323 575.128C283.47 575.043 282.723 574.701 282.083 574.104C281.486 573.507 281.166 572.781 281.123 571.928L280.995 567.448C279.544 570.008 277.56 572.013 275.043 573.464C272.568 574.915 269.88 575.64 266.979 575.64C263.48 575.64 260.835 574.424 259.043 571.992C257.251 569.56 256.355 565.976 256.355 561.24ZM291.987 565.4C291.987 563.309 292.584 561.517 293.779 560.024C294.974 558.488 296.616 557.315 298.707 556.504C300.84 555.651 303.294 555.224 306.067 555.224C307.688 555.224 309.374 555.352 311.123 555.608C312.872 555.864 314.43 556.248 315.795 556.76V553.944C315.795 551.128 314.963 548.888 313.299 547.224C311.635 545.56 309.331 544.728 306.387 544.728C304.595 544.728 302.824 545.069 301.075 545.752C299.368 546.392 297.576 547.352 295.699 548.632L294.035 545.56C296.211 544.067 298.344 542.957 300.435 542.232C302.526 541.464 304.659 541.08 306.835 541.08C310.931 541.08 314.174 542.253 316.563 544.6C318.952 546.947 320.147 550.189 320.147 554.328V569.752C320.147 570.349 320.275 570.797 320.531 571.096C320.787 571.352 321.192 571.501 321.747 571.544V575C321.278 575.043 320.872 575.085 320.531 575.128C320.19 575.171 319.934 575.171 319.763 575.128C318.696 575.085 317.886 574.744 317.331 574.104C316.776 573.464 316.478 572.781 316.435 572.056L316.371 569.624C314.878 571.544 312.936 573.037 310.547 574.104C308.158 575.128 305.726 575.64 303.251 575.64C301.118 575.64 299.176 575.192 297.427 574.296C295.72 573.357 294.376 572.12 293.395 570.584C292.456 569.005 291.987 567.277 291.987 565.4ZM314.323 567.96C314.792 567.363 315.155 566.787 315.411 566.232C315.667 565.677 315.795 565.187 315.795 564.76V559.896C314.344 559.341 312.83 558.915 311.251 558.616C309.715 558.317 308.158 558.168 306.579 558.168C303.464 558.168 300.947 558.787 299.027 560.024C297.107 561.261 296.147 562.947 296.147 565.08C296.147 566.317 296.467 567.491 297.107 568.6C297.747 569.667 298.686 570.563 299.923 571.288C301.16 571.971 302.611 572.312 304.275 572.312C306.366 572.312 308.307 571.907 310.099 571.096C311.934 570.285 313.342 569.24 314.323 567.96ZM346.759 575V529.56H376.583V533.528H351.239V550.232H372.615V553.944H351.239V575H346.759ZM383.55 575V541.656H387.902V575H383.55ZM383.55 534.68V528.28H387.902V534.68H383.55ZM397.68 528.28H402.032V567.448C402.032 569.112 402.33 570.2 402.928 570.712C403.525 571.224 404.25 571.48 405.104 571.48C405.872 571.48 406.64 571.395 407.408 571.224C408.176 571.053 408.837 570.883 409.392 570.712L410.16 574.232C409.349 574.573 408.346 574.851 407.152 575.064C406 575.277 404.997 575.384 404.144 575.384C402.181 575.384 400.602 574.808 399.408 573.656C398.256 572.504 397.68 570.925 397.68 568.92V528.28ZM430.925 573.4C430.584 573.528 430.05 573.763 429.325 574.104C428.6 574.445 427.725 574.744 426.701 575C425.677 575.256 424.568 575.384 423.373 575.384C422.136 575.384 420.962 575.149 419.853 574.68C418.786 574.211 417.933 573.507 417.293 572.568C416.653 571.587 416.333 570.392 416.333 568.984V545.112H411.725V541.656H416.333V530.392H420.685V541.656H428.365V545.112H420.685V567.768C420.77 568.963 421.197 569.859 421.965 570.456C422.776 571.053 423.693 571.352 424.717 571.352C425.912 571.352 427 571.16 427.981 570.776C428.962 570.349 429.56 570.051 429.773 569.88L430.925 573.4ZM453.003 545.496C450.101 545.581 447.541 546.392 445.323 547.928C443.147 549.464 441.611 551.576 440.715 554.264V575H436.363V541.656H440.459V549.656C441.611 547.309 443.125 545.411 445.003 543.96C446.923 542.509 448.949 541.699 451.083 541.528C451.509 541.485 451.872 541.464 452.171 541.464C452.512 541.464 452.789 541.485 453.003 541.528V545.496ZM455.987 565.4C455.987 563.309 456.584 561.517 457.779 560.024C458.974 558.488 460.616 557.315 462.707 556.504C464.84 555.651 467.294 555.224 470.067 555.224C471.688 555.224 473.374 555.352 475.123 555.608C476.872 555.864 478.43 556.248 479.795 556.76V553.944C479.795 551.128 478.963 548.888 477.299 547.224C475.635 545.56 473.331 544.728 470.387 544.728C468.595 544.728 466.824 545.069 465.075 545.752C463.368 546.392 461.576 547.352 459.699 548.632L458.035 545.56C460.211 544.067 462.344 542.957 464.435 542.232C466.526 541.464 468.659 541.08 470.835 541.08C474.931 541.08 478.174 542.253 480.563 544.6C482.952 546.947 484.147 550.189 484.147 554.328V569.752C484.147 570.349 484.275 570.797 484.531 571.096C484.787 571.352 485.192 571.501 485.747 571.544V575C485.278 575.043 484.872 575.085 484.531 575.128C484.19 575.171 483.934 575.171 483.763 575.128C482.696 575.085 481.886 574.744 481.331 574.104C480.776 573.464 480.478 572.781 480.435 572.056L480.371 569.624C478.878 571.544 476.936 573.037 474.547 574.104C472.158 575.128 469.726 575.64 467.251 575.64C465.118 575.64 463.176 575.192 461.427 574.296C459.72 573.357 458.376 572.12 457.395 570.584C456.456 569.005 455.987 567.277 455.987 565.4ZM478.323 567.96C478.792 567.363 479.155 566.787 479.411 566.232C479.667 565.677 479.795 565.187 479.795 564.76V559.896C478.344 559.341 476.83 558.915 475.251 558.616C473.715 558.317 472.158 558.168 470.579 558.168C467.464 558.168 464.947 558.787 463.027 560.024C461.107 561.261 460.147 562.947 460.147 565.08C460.147 566.317 460.467 567.491 461.107 568.6C461.747 569.667 462.686 570.563 463.923 571.288C465.16 571.971 466.611 572.312 468.275 572.312C470.366 572.312 472.307 571.907 474.099 571.096C475.934 570.285 477.342 569.24 478.323 567.96ZM491.31 558.424C491.31 555.267 491.95 552.387 493.23 549.784C494.553 547.139 496.366 545.027 498.67 543.448C500.974 541.869 503.598 541.08 506.542 541.08C509.315 541.08 511.79 541.827 513.966 543.32C516.185 544.771 517.913 546.541 519.15 548.632V528.28H523.502V569.752C523.502 570.349 523.63 570.797 523.886 571.096C524.142 571.352 524.526 571.501 525.038 571.544V575C524.185 575.128 523.523 575.171 523.054 575.128C522.158 575.085 521.369 574.723 520.686 574.04C520.003 573.357 519.662 572.611 519.662 571.8V568.536C518.339 570.712 516.547 572.44 514.286 573.72C512.025 575 509.678 575.64 507.246 575.64C504.942 575.64 502.809 575.171 500.846 574.232C498.926 573.293 497.241 572.013 495.79 570.392C494.382 568.771 493.273 566.936 492.462 564.888C491.694 562.797 491.31 560.643 491.31 558.424ZM519.15 563.544V553.24C518.595 551.704 517.699 550.317 516.462 549.08C515.225 547.8 513.817 546.797 512.238 546.072C510.702 545.304 509.166 544.92 507.63 544.92C505.838 544.92 504.217 545.304 502.766 546.072C501.315 546.797 500.057 547.8 498.99 549.08C497.966 550.36 497.177 551.811 496.622 553.432C496.067 555.053 495.79 556.717 495.79 558.424C495.79 560.216 496.089 561.923 496.686 563.544C497.326 565.165 498.222 566.616 499.374 567.896C500.526 569.133 501.849 570.093 503.342 570.776C504.835 571.459 506.457 571.8 508.206 571.8C509.315 571.8 510.467 571.587 511.662 571.16C512.857 570.733 513.987 570.157 515.054 569.432C516.163 568.664 517.081 567.768 517.806 566.744C518.531 565.72 518.979 564.653 519.15 563.544ZM530.674 565.4C530.674 563.309 531.272 561.517 532.467 560.024C533.661 558.488 535.304 557.315 537.395 556.504C539.528 555.651 541.981 555.224 544.755 555.224C546.376 555.224 548.061 555.352 549.811 555.608C551.56 555.864 553.117 556.248 554.483 556.76V553.944C554.483 551.128 553.651 548.888 551.987 547.224C550.323 545.56 548.019 544.728 545.075 544.728C543.283 544.728 541.512 545.069 539.763 545.752C538.056 546.392 536.264 547.352 534.387 548.632L532.723 545.56C534.899 544.067 537.032 542.957 539.123 542.232C541.213 541.464 543.347 541.08 545.523 541.08C549.619 541.08 552.861 542.253 555.251 544.6C557.64 546.947 558.835 550.189 558.835 554.328V569.752C558.835 570.349 558.963 570.797 559.219 571.096C559.475 571.352 559.88 571.501 560.435 571.544V575C559.965 575.043 559.56 575.085 559.219 575.128C558.877 575.171 558.621 575.171 558.451 575.128C557.384 575.085 556.573 574.744 556.019 574.104C555.464 573.464 555.165 572.781 555.123 572.056L555.059 569.624C553.565 571.544 551.624 573.037 549.235 574.104C546.845 575.128 544.413 575.64 541.939 575.64C539.805 575.64 537.864 575.192 536.115 574.296C534.408 573.357 533.064 572.12 532.083 570.584C531.144 569.005 530.674 567.277 530.674 565.4ZM553.011 567.96C553.48 567.363 553.843 566.787 554.099 566.232C554.355 565.677 554.483 565.187 554.483 564.76V559.896C553.032 559.341 551.517 558.915 549.939 558.616C548.403 558.317 546.845 558.168 545.267 558.168C542.152 558.168 539.635 558.787 537.715 560.024C535.795 561.261 534.835 562.947 534.835 565.08C534.835 566.317 535.155 567.491 535.795 568.6C536.435 569.667 537.373 570.563 538.611 571.288C539.848 571.971 541.299 572.312 542.963 572.312C545.053 572.312 546.995 571.907 548.787 571.096C550.621 570.285 552.029 569.24 553.011 567.96Z"
          fill="black"
        />
        <path
          d="M966.776 525.56H970.552L989.432 571H984.696L978.808 556.792H958.392L952.568 571H947.768L966.776 525.56ZM977.784 553.272L968.632 530.808L959.352 553.272H977.784ZM970.168 519.352L967.288 518.264L971.064 512.312H975.672L970.168 519.352ZM1007.49 571.448C1005.23 571.448 1003.14 570.979 1001.22 570.04C999.297 569.101 997.633 567.843 996.225 566.264C994.859 564.643 993.793 562.808 993.025 560.76C992.257 558.712 991.873 556.6 991.873 554.424C991.873 552.077 992.235 549.88 992.961 547.832C993.729 545.741 994.795 543.885 996.161 542.264C997.569 540.643 999.211 539.384 1001.09 538.488C1002.97 537.549 1005.06 537.08 1007.36 537.08C1010.22 537.08 1012.69 537.805 1014.78 539.256C1016.92 540.707 1018.71 542.499 1020.16 544.632V537.656H1024.06V571.128C1024.06 574.2 1023.32 576.781 1021.82 578.872C1020.37 581.005 1018.39 582.605 1015.87 583.672C1013.4 584.739 1010.69 585.272 1007.74 585.272C1003.95 585.272 1000.88 584.589 998.529 583.224C996.182 581.859 994.262 580.024 992.769 577.72L995.457 575.608C996.779 577.699 998.529 579.256 1000.7 580.28C1002.92 581.304 1005.27 581.816 1007.74 581.816C1009.92 581.816 1011.9 581.411 1013.7 580.6C1015.53 579.832 1016.98 578.659 1018.05 577.08C1019.16 575.501 1019.71 573.517 1019.71 571.128V564.536C1018.43 566.627 1016.68 568.312 1014.46 569.592C1012.25 570.829 1009.92 571.448 1007.49 571.448ZM1008.7 567.8C1010.03 567.8 1011.29 567.565 1012.48 567.096C1013.72 566.627 1014.85 566.008 1015.87 565.24C1016.9 564.429 1017.75 563.533 1018.43 562.552C1019.12 561.571 1019.54 560.568 1019.71 559.544V549.24C1019.07 547.619 1018.16 546.189 1016.96 544.952C1015.77 543.672 1014.4 542.691 1012.86 542.008C1011.37 541.283 1009.81 540.92 1008.19 540.92C1006.32 540.92 1004.63 541.325 1003.14 542.136C1001.69 542.904 1000.45 543.949 999.425 545.272C998.443 546.552 997.675 548.003 997.121 549.624C996.566 551.245 996.289 552.867 996.289 554.488C996.289 556.28 996.609 557.987 997.249 559.608C997.889 561.187 998.763 562.616 999.873 563.896C1001.02 565.133 1002.35 566.093 1003.84 566.776C1005.38 567.459 1007 567.8 1008.7 567.8ZM1033.36 557.24V537.656H1037.71V556.472C1037.71 560.269 1038.35 563.107 1039.63 564.984C1040.95 566.861 1042.89 567.8 1045.45 567.8C1047.16 567.8 1048.8 567.437 1050.38 566.712C1052 565.944 1053.43 564.877 1054.67 563.512C1055.9 562.104 1056.84 560.483 1057.48 558.648V537.656H1061.84V565.752C1061.84 566.349 1061.96 566.797 1062.22 567.096C1062.48 567.352 1062.86 567.501 1063.37 567.544V571C1062.86 571.043 1062.45 571.064 1062.16 571.064C1061.86 571.107 1061.58 571.128 1061.32 571.128C1060.47 571.043 1059.72 570.701 1059.08 570.104C1058.49 569.507 1058.17 568.781 1058.12 567.928L1058 563.448C1056.54 566.008 1054.56 568.013 1052.04 569.464C1049.57 570.915 1046.88 571.64 1043.98 571.64C1040.48 571.64 1037.84 570.424 1036.04 567.992C1034.25 565.56 1033.36 561.976 1033.36 557.24ZM1068.99 561.4C1068.99 559.309 1069.58 557.517 1070.78 556.024C1071.97 554.488 1073.62 553.315 1075.71 552.504C1077.84 551.651 1080.29 551.224 1083.07 551.224C1084.69 551.224 1086.37 551.352 1088.12 551.608C1089.87 551.864 1091.43 552.248 1092.8 552.76V549.944C1092.8 547.128 1091.96 544.888 1090.3 543.224C1088.64 541.56 1086.33 540.728 1083.39 540.728C1081.6 540.728 1079.82 541.069 1078.08 541.752C1076.37 542.392 1074.58 543.352 1072.7 544.632L1071.04 541.56C1073.21 540.067 1075.34 538.957 1077.44 538.232C1079.53 537.464 1081.66 537.08 1083.84 537.08C1087.93 537.08 1091.17 538.253 1093.56 540.6C1095.95 542.947 1097.15 546.189 1097.15 550.328V565.752C1097.15 566.349 1097.28 566.797 1097.53 567.096C1097.79 567.352 1098.19 567.501 1098.75 567.544V571C1098.28 571.043 1097.87 571.085 1097.53 571.128C1097.19 571.171 1096.93 571.171 1096.76 571.128C1095.7 571.085 1094.89 570.744 1094.33 570.104C1093.78 569.464 1093.48 568.781 1093.44 568.056L1093.37 565.624C1091.88 567.544 1089.94 569.037 1087.55 570.104C1085.16 571.128 1082.73 571.64 1080.25 571.64C1078.12 571.64 1076.18 571.192 1074.43 570.296C1072.72 569.357 1071.38 568.12 1070.4 566.584C1069.46 565.005 1068.99 563.277 1068.99 561.4ZM1091.32 563.96C1091.79 563.363 1092.16 562.787 1092.41 562.232C1092.67 561.677 1092.8 561.187 1092.8 560.76V555.896C1091.34 555.341 1089.83 554.915 1088.25 554.616C1086.72 554.317 1085.16 554.168 1083.58 554.168C1080.46 554.168 1077.95 554.787 1076.03 556.024C1074.11 557.261 1073.15 558.947 1073.15 561.08C1073.15 562.317 1073.47 563.491 1074.11 564.6C1074.75 565.667 1075.69 566.563 1076.92 567.288C1078.16 567.971 1079.61 568.312 1081.28 568.312C1083.37 568.312 1085.31 567.907 1087.1 567.096C1088.93 566.285 1090.34 565.24 1091.32 563.96ZM1123.76 571V525.56H1142.57C1144.54 525.56 1146.33 525.965 1147.95 526.776C1149.61 527.587 1151.04 528.696 1152.24 530.104C1153.43 531.469 1154.37 533.005 1155.05 534.712C1155.74 536.376 1156.08 538.083 1156.08 539.832C1156.08 542.307 1155.52 544.653 1154.41 546.872C1153.35 549.048 1151.83 550.819 1149.87 552.184C1147.91 553.549 1145.6 554.232 1142.96 554.232H1128.24V571H1123.76ZM1128.24 550.264H1142.77C1144.56 550.264 1146.12 549.773 1147.44 548.792C1148.76 547.811 1149.79 546.531 1150.51 544.952C1151.24 543.373 1151.6 541.667 1151.6 539.832C1151.6 537.955 1151.17 536.227 1150.32 534.648C1149.47 533.069 1148.33 531.832 1146.93 530.936C1145.56 529.997 1144.05 529.528 1142.38 529.528H1128.24V550.264ZM1176.26 571.64C1173.87 571.64 1171.65 571.192 1169.6 570.296C1167.6 569.357 1165.85 568.099 1164.35 566.52C1162.9 564.899 1161.77 563.064 1160.96 561.016C1160.15 558.925 1159.75 556.728 1159.75 554.424C1159.75 552.035 1160.15 549.816 1160.96 547.768C1161.77 545.677 1162.92 543.843 1164.42 542.264C1165.91 540.643 1167.66 539.384 1169.67 538.488C1171.71 537.549 1173.93 537.08 1176.32 537.08C1178.71 537.08 1180.91 537.549 1182.91 538.488C1184.92 539.384 1186.67 540.643 1188.16 542.264C1189.66 543.843 1190.81 545.677 1191.62 547.768C1192.43 549.816 1192.83 552.035 1192.83 554.424C1192.83 556.728 1192.43 558.925 1191.62 561.016C1190.81 563.064 1189.66 564.899 1188.16 566.52C1186.71 568.099 1184.96 569.357 1182.91 570.296C1180.91 571.192 1178.69 571.64 1176.26 571.64ZM1164.16 554.488C1164.16 556.963 1164.7 559.224 1165.76 561.272C1166.87 563.277 1168.34 564.877 1170.18 566.072C1172.01 567.224 1174.04 567.8 1176.26 567.8C1178.48 567.8 1180.5 567.203 1182.34 566.008C1184.17 564.813 1185.64 563.192 1186.75 561.144C1187.86 559.053 1188.42 556.792 1188.42 554.36C1188.42 551.885 1187.86 549.624 1186.75 547.576C1185.64 545.528 1184.17 543.907 1182.34 542.712C1180.5 541.517 1178.48 540.92 1176.26 540.92C1174.04 540.92 1172.01 541.539 1170.18 542.776C1168.39 544.013 1166.94 545.656 1165.83 547.704C1164.72 549.709 1164.16 551.971 1164.16 554.488ZM1177.79 531.32L1174.91 530.232L1178.69 524.28H1183.3L1177.79 531.32ZM1211.06 571.64C1208.33 571.64 1205.79 571.192 1203.44 570.296C1201.09 569.4 1199.07 568.035 1197.36 566.2L1199.15 563.128C1201.03 564.877 1202.91 566.157 1204.78 566.968C1206.7 567.736 1208.73 568.12 1210.86 568.12C1213.47 568.12 1215.58 567.608 1217.2 566.584C1218.82 565.517 1219.63 564.003 1219.63 562.04C1219.63 560.717 1219.23 559.715 1218.42 559.032C1217.65 558.307 1216.52 557.731 1215.02 557.304C1213.57 556.835 1211.82 556.344 1209.78 555.832C1207.47 555.192 1205.53 554.531 1203.95 553.848C1202.42 553.123 1201.24 552.227 1200.43 551.16C1199.66 550.051 1199.28 548.621 1199.28 546.872C1199.28 544.696 1199.81 542.904 1200.88 541.496C1201.99 540.045 1203.48 538.957 1205.36 538.232C1207.28 537.464 1209.41 537.08 1211.76 537.08C1214.32 537.08 1216.58 537.485 1218.54 538.296C1220.51 539.107 1222.11 540.237 1223.34 541.688L1221.23 544.632C1220.04 543.267 1218.61 542.264 1216.94 541.624C1215.32 540.941 1213.51 540.6 1211.5 540.6C1210.14 540.6 1208.84 540.792 1207.6 541.176C1206.36 541.517 1205.34 542.115 1204.53 542.968C1203.76 543.779 1203.38 544.909 1203.38 546.36C1203.38 547.555 1203.68 548.493 1204.27 549.176C1204.87 549.816 1205.77 550.371 1206.96 550.84C1208.16 551.267 1209.63 551.736 1211.38 552.248C1213.89 552.931 1216.09 553.635 1217.97 554.36C1219.85 555.043 1221.3 555.939 1222.32 557.048C1223.34 558.157 1223.86 559.715 1223.86 561.72C1223.86 564.835 1222.68 567.267 1220.34 569.016C1217.99 570.765 1214.9 571.64 1211.06 571.64ZM1230.41 555.576V551.544H1249.1V555.576H1230.41ZM1272.51 571.64C1270.08 571.64 1267.84 571.192 1265.79 570.296C1263.79 569.357 1262.02 568.077 1260.48 566.456C1258.99 564.835 1257.82 562.979 1256.96 560.888C1256.15 558.797 1255.75 556.579 1255.75 554.232C1255.75 551.075 1256.45 548.195 1257.86 545.592C1259.27 542.989 1261.23 540.92 1263.75 539.384C1266.26 537.848 1269.16 537.08 1272.45 537.08C1275.56 537.08 1278.32 537.805 1280.71 539.256C1283.1 540.664 1284.87 542.584 1286.02 545.016L1281.79 546.36C1280.86 544.653 1279.53 543.331 1277.83 542.392C1276.16 541.411 1274.31 540.92 1272.26 540.92C1270.04 540.92 1268.01 541.496 1266.18 542.648C1264.34 543.8 1262.87 545.379 1261.76 547.384C1260.7 549.389 1260.16 551.672 1260.16 554.232C1260.16 556.749 1260.72 559.032 1261.83 561.08C1262.94 563.128 1264.41 564.771 1266.24 566.008C1268.08 567.203 1270.1 567.8 1272.32 567.8C1273.77 567.8 1275.16 567.544 1276.48 567.032C1277.85 566.52 1279.02 565.837 1280 564.984C1281.03 564.088 1281.71 563.128 1282.05 562.104L1286.34 563.384C1285.74 564.963 1284.74 566.392 1283.33 567.672C1281.96 568.909 1280.34 569.891 1278.47 570.616C1276.63 571.299 1274.65 571.64 1272.51 571.64ZM1307.07 571.64C1304.68 571.64 1302.46 571.192 1300.41 570.296C1298.41 569.357 1296.66 568.099 1295.17 566.52C1293.72 564.899 1292.59 563.064 1291.77 561.016C1290.96 558.925 1290.56 556.728 1290.56 554.424C1290.56 552.035 1290.96 549.816 1291.77 547.768C1292.59 545.677 1293.74 543.843 1295.23 542.264C1296.72 540.643 1298.47 539.384 1300.48 538.488C1302.53 537.549 1304.75 537.08 1307.13 537.08C1309.52 537.08 1311.72 537.549 1313.73 538.488C1315.73 539.384 1317.48 540.643 1318.97 542.264C1320.47 543.843 1321.62 545.677 1322.43 547.768C1323.24 549.816 1323.65 552.035 1323.65 554.424C1323.65 556.728 1323.24 558.925 1322.43 561.016C1321.62 563.064 1320.47 564.899 1318.97 566.52C1317.52 568.099 1315.77 569.357 1313.73 570.296C1311.72 571.192 1309.5 571.64 1307.07 571.64ZM1294.97 554.488C1294.97 556.963 1295.51 559.224 1296.57 561.272C1297.68 563.277 1299.16 564.877 1300.99 566.072C1302.83 567.224 1304.85 567.8 1307.07 567.8C1309.29 567.8 1311.32 567.203 1313.15 566.008C1314.99 564.813 1316.46 563.192 1317.57 561.144C1318.68 559.053 1319.23 556.792 1319.23 554.36C1319.23 551.885 1318.68 549.624 1317.57 547.576C1316.46 545.528 1314.99 543.907 1313.15 542.712C1311.32 541.517 1309.29 540.92 1307.07 540.92C1304.85 540.92 1302.83 541.539 1300.99 542.776C1299.2 544.013 1297.75 545.656 1296.64 547.704C1295.53 549.709 1294.97 551.971 1294.97 554.488ZM1358.96 571H1354.61V552.376C1354.61 548.451 1354.03 545.592 1352.88 543.8C1351.73 541.965 1349.91 541.048 1347.44 541.048C1345.73 541.048 1344.05 541.475 1342.38 542.328C1340.72 543.139 1339.25 544.269 1337.97 545.72C1336.73 547.128 1335.83 548.749 1335.28 550.584V571H1330.93V537.656H1334.89V545.208C1335.79 543.587 1336.96 542.179 1338.41 540.984C1339.86 539.747 1341.51 538.787 1343.34 538.104C1345.18 537.421 1347.07 537.08 1349.04 537.08C1350.87 537.08 1352.43 537.421 1353.71 538.104C1354.99 538.787 1356.01 539.768 1356.78 541.048C1357.55 542.285 1358.1 543.8 1358.44 545.592C1358.79 547.341 1358.96 549.304 1358.96 551.48V571ZM1383.93 569.4C1383.58 569.528 1383.05 569.763 1382.33 570.104C1381.6 570.445 1380.73 570.744 1379.7 571C1378.68 571.256 1377.57 571.384 1376.37 571.384C1375.14 571.384 1373.96 571.149 1372.85 570.68C1371.79 570.211 1370.93 569.507 1370.29 568.568C1369.65 567.587 1369.33 566.392 1369.33 564.984V541.112H1364.73V537.656H1369.33V526.392H1373.69V537.656H1381.37V541.112H1373.69V563.768C1373.77 564.963 1374.2 565.859 1374.97 566.456C1375.78 567.053 1376.69 567.352 1377.72 567.352C1378.91 567.352 1380 567.16 1380.98 566.776C1381.96 566.349 1382.56 566.051 1382.77 565.88L1383.93 569.4ZM1386.67 561.4C1386.67 559.309 1387.27 557.517 1388.47 556.024C1389.66 554.488 1391.3 553.315 1393.39 552.504C1395.53 551.651 1397.98 551.224 1400.75 551.224C1402.38 551.224 1404.06 551.352 1405.81 551.608C1407.56 551.864 1409.12 552.248 1410.48 552.76V549.944C1410.48 547.128 1409.65 544.888 1407.99 543.224C1406.32 541.56 1404.02 540.728 1401.07 540.728C1399.28 540.728 1397.51 541.069 1395.76 541.752C1394.06 542.392 1392.26 543.352 1390.39 544.632L1388.72 541.56C1390.9 540.067 1393.03 538.957 1395.12 538.232C1397.21 537.464 1399.35 537.08 1401.52 537.08C1405.62 537.08 1408.86 538.253 1411.25 540.6C1413.64 542.947 1414.83 546.189 1414.83 550.328V565.752C1414.83 566.349 1414.96 566.797 1415.22 567.096C1415.47 567.352 1415.88 567.501 1416.43 567.544V571C1415.97 571.043 1415.56 571.085 1415.22 571.128C1414.88 571.171 1414.62 571.171 1414.45 571.128C1413.38 571.085 1412.57 570.744 1412.02 570.104C1411.46 569.464 1411.17 568.781 1411.12 568.056L1411.06 565.624C1409.57 567.544 1407.62 569.037 1405.23 570.104C1402.85 571.128 1400.41 571.64 1397.94 571.64C1395.81 571.64 1393.86 571.192 1392.11 570.296C1390.41 569.357 1389.06 568.12 1388.08 566.584C1387.14 565.005 1386.67 563.277 1386.67 561.4ZM1409.01 563.96C1409.48 563.363 1409.84 562.787 1410.1 562.232C1410.35 561.677 1410.48 561.187 1410.48 560.76V555.896C1409.03 555.341 1407.52 554.915 1405.94 554.616C1404.4 554.317 1402.85 554.168 1401.27 554.168C1398.15 554.168 1395.63 554.787 1393.71 556.024C1391.79 557.261 1390.83 558.947 1390.83 561.08C1390.83 562.317 1391.15 563.491 1391.79 564.6C1392.43 565.667 1393.37 566.563 1394.61 567.288C1395.85 567.971 1397.3 568.312 1398.96 568.312C1401.05 568.312 1402.99 567.907 1404.79 567.096C1406.62 566.285 1408.03 565.24 1409.01 563.96ZM1439.99 569.4C1439.65 569.528 1439.11 569.763 1438.39 570.104C1437.66 570.445 1436.79 570.744 1435.76 571C1434.74 571.256 1433.63 571.384 1432.44 571.384C1431.2 571.384 1430.02 571.149 1428.92 570.68C1427.85 570.211 1427 569.507 1426.36 568.568C1425.72 567.587 1425.4 566.392 1425.4 564.984V541.112H1420.79V537.656H1425.4V526.392H1429.75V537.656H1437.43V541.112H1429.75V563.768C1429.83 564.963 1430.26 565.859 1431.03 566.456C1431.84 567.053 1432.76 567.352 1433.78 567.352C1434.97 567.352 1436.06 567.16 1437.04 566.776C1438.02 566.349 1438.62 566.051 1438.84 565.88L1439.99 569.4ZM1459.07 571.64C1456.68 571.64 1454.46 571.192 1452.41 570.296C1450.41 569.357 1448.66 568.099 1447.17 566.52C1445.72 564.899 1444.59 563.064 1443.77 561.016C1442.96 558.925 1442.56 556.728 1442.56 554.424C1442.56 552.035 1442.96 549.816 1443.77 547.768C1444.59 545.677 1445.74 543.843 1447.23 542.264C1448.72 540.643 1450.47 539.384 1452.48 538.488C1454.53 537.549 1456.75 537.08 1459.13 537.08C1461.52 537.08 1463.72 537.549 1465.73 538.488C1467.73 539.384 1469.48 540.643 1470.97 542.264C1472.47 543.843 1473.62 545.677 1474.43 547.768C1475.24 549.816 1475.65 552.035 1475.65 554.424C1475.65 556.728 1475.24 558.925 1474.43 561.016C1473.62 563.064 1472.47 564.899 1470.97 566.52C1469.52 568.099 1467.77 569.357 1465.73 570.296C1463.72 571.192 1461.5 571.64 1459.07 571.64ZM1446.97 554.488C1446.97 556.963 1447.51 559.224 1448.57 561.272C1449.68 563.277 1451.16 564.877 1452.99 566.072C1454.83 567.224 1456.85 567.8 1459.07 567.8C1461.29 567.8 1463.32 567.203 1465.15 566.008C1466.99 564.813 1468.46 563.192 1469.57 561.144C1470.68 559.053 1471.23 556.792 1471.23 554.36C1471.23 551.885 1470.68 549.624 1469.57 547.576C1468.46 545.528 1466.99 543.907 1465.15 542.712C1463.32 541.517 1461.29 540.92 1459.07 540.92C1456.85 540.92 1454.83 541.539 1452.99 542.776C1451.2 544.013 1449.75 545.656 1448.64 547.704C1447.53 549.709 1446.97 551.971 1446.97 554.488Z"
          fill="black"
        />
        <path d="M1 693V605H715V548L806 649L715 747.5V693H1Z" fill="#BEE3F8" stroke="#BEE3F8" />
        <path d="M810 693V605H1524V548L1615 649L1524 747.5V693H810Z" fill="#81E6D9" stroke="#81E6D9" />
        <path
          d="M233.5 96L305.5 96V383.5H369.5L268.5 474.5L170 383.5H233.5L233.5 96Z"
          fill="#C6F6D5"
          stroke="#C6F6D5"
        />
        <path d="M437.5 96L509.5 96V383.5H573.5L472.5 474.5L374 383.5H437.5V96Z" fill="#C6F6D5" stroke="#C6F6D5" />
      </svg>

      <Text fontSize={14} textAlign={'center'} color={'black'}>
        <p>
          Q<sub>AD</sub> = Q<sub>AF</sub> - Q<sub>RL</sub> + Q<sub>F</sub> + Q<sub>D</sub>
        </p>
      </Text>

      <MassBalanceSubtitle tableData={tableData} />
    </CardBody>
  );
};

export default DosagemMassBalance;