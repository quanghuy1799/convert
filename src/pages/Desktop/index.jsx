import React from "react";

import { Button, Img, Input, List, PagerIndicator, Text } from "components";

const DesktopPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-circularstd items-end justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start overflow-auto md:px-5 w-[92%] md:w-full">
          <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between py-8 w-full">
            <div className="flex flex-row gap-4 items-center justify-start w-auto">
              <Img
                className="h-10 md:h-auto object-cover w-10"
                src="images/img_vector.png"
                alt="vector"
              />
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtCircularStdBlack24"
              >
                Travlog
              </Text>
            </div>
            <ul className="flex flex-row gap-16 sm:hidden items-start justify-start w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-blue_gray-900 text-sm">
                  <Text size="txtCircularStdBold14">Home</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:text-blue_gray-900 text-gray-900_7f text-sm"
                >
                  <Text size="txtCircularStdBold14Gray9007f">Discover</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:text-blue_gray-900 text-gray-900_7f text-sm"
                >
                  <Text size="txtCircularStdBold14Gray9007f">
                    Special Deals
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:text-blue_gray-900 text-gray-900_7f text-sm"
                >
                  <Text size="txtCircularStdBold14Gray9007f">Contact</Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-row items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-bold min-w-[105px] text-center text-sm"
                shape="round"
              >
                Log In
              </Button>
              <Button
                className="cursor-pointer font-bold min-w-[115px] text-center text-sm"
                shape="round"
                color="indigo_400"
              >
                Sign Up
              </Button>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1184px] py-16 w-full">
            <div className="flex flex-1 flex-col gap-[43px] items-start justify-start w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[224px] rounded-[28px] shadow-bs1"
                rightIcon={
                  <Img
                    className="h-6 ml-4"
                    src="images/img_work_1.svg"
                    alt="work 1"
                  />
                }
              >
                <div className="!text-pink-300 font-bold font-circularstd text-left text-sm">
                  Explore the world!
                </div>
              </Button>
              <Text
                className="leading-[120.00%] md:text-5xl text-[69px] text-black-900"
                size="txtCircularStdBold69"
              >
                <span className="text-black-900 font-circularstd text-left font-bold">
                  Travel{" "}
                </span>
                <span className="text-pink-300 font-circularstd text-left font-bold">
                  top destination
                </span>
                <span className="text-black-900 font-circularstd text-left font-bold">
                  <>
                    {" "}
                    <br />
                    of the world
                  </>
                </span>
              </Text>
              <Text
                className="leading-[160.00%] text-gray-900_7f text-lg"
                size="txtInterRegular18"
              >
                <>
                  We always make our customer happy by providing
                  <br />
                  as many choices as possible{" "}
                </>
              </Text>
              <div className="flex flex-row font-circularstd gap-4 items-start justify-start w-auto">
                <Button
                  className="cursor-pointer font-bold min-w-[141px] shadow-bs2 text-center text-sm"
                  shape="round"
                  color="indigo_400"
                >
                  Get Started
                </Button>
                <Button
                  className="border border-gray-200 border-solid cursor-pointer flex items-center justify-center min-w-[181px] rounded-[28px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-2"
                      src="images/img_playcircle5_1.svg"
                      alt="play-circle.5 1"
                    />
                  }
                >
                  <div className="font-bold text-left text-sm">Watch Demo</div>
                </Button>
              </div>
            </div>
            <div className="md:h-[420px] h-[713px] sm:h-[851px] relative w-[66%] md:w-full">
              <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
                <Img
                  className="h-[287px] mx-auto"
                  src="images/img_layer.svg"
                  alt="layer"
                />
                <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-start mt-[-212.38px] mx-auto w-auto z-[1]">
                  <div className="flex flex-col gap-8 items-start justify-start w-auto">
                    <Img
                      className="h-[300px] md:h-auto object-cover rounded-bl-[32px] rounded-br-[32px] w-[272px] sm:w-full"
                      src="images/img_rectangle1.png"
                      alt="rectangleOne"
                    />
                    <Img
                      className="h-[300px] md:h-auto object-cover rounded-tl-[32px] rounded-tr-[32px] w-[272px] sm:w-full"
                      src="images/img_rectangle2.png"
                      alt="rectangleTwo"
                    />
                  </div>
                  <Img
                    className="h-[400px] md:h-auto object-cover rounded-[32px] w-[272px] sm:w-full"
                    src="images/img_rectangle3.png"
                    alt="rectangleThree"
                  />
                </div>
              </div>
              <Button
                className="absolute bottom-[43%] flex h-16 items-center justify-center left-[7%] w-16"
                shape="circle"
                color="pink_300"
              >
                <Img className="h-8" src="images/img_send1.svg" alt="sendOne" />
              </Button>
              <Button
                className="absolute bottom-[0] flex h-16 items-center justify-center right-[30%] w-16"
                shape="circle"
                color="deep_orange_500"
              >
                <Img className="h-8" src="images/img_search.svg" alt="search" />
              </Button>
              <Button
                className="bottom-[24%] cursor-pointer flex items-center justify-center mb-[169px] min-w-[166px] mr-3.5 right-[2%] rounded-[28px] shadow-bs3"
                leftIcon={
                  <Img
                    className="h-6 mr-2 right-[1%] absolute"
                    src="images/img_location_1.svg"
                    alt="location 1"
                  />
                }
              >
                <div className="!text-gray-800 font-bold text-left text-sm">
                  Top Places
                </div>
              </Button>
            </div>
          </div>
          <Img
            className="h-40 w-[1184px]"
            src="images/img_frame85.svg"
            alt="frameEightyFive"
          />
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-screen-2xl py-16 w-full">
            <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
              <Text
                className="sm:text-[19px] md:text-[21px] text-[23px] text-pink-300 tracking-[4.60px] uppercase w-full"
                size="txtCircularStdBold23"
              >
                Services
              </Text>
              <Text
                className="leading-[120.00%] max-w-[444px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
                size="txtCircularStdBold44"
              >
                Our top value categories for you
              </Text>
            </div>
            <List
              className="flex-1 sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1092px] w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border hover:border-0 border-gray-900_19 border-solid hover:cursor-pointer flex flex-1 flex-col md:gap-10 gap-16 h-[443px] md:h-auto items-center justify-start hover:mx-0 p-16 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-16 md:h-auto object-cover w-16"
                  src="images/img_destination1.png"
                  alt="destinationOne"
                />
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-full"
                    size="txtCircularStdBold28"
                  >
                    Best Tour Guide
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[222px] md:max-w-full text-center text-gray-900_7f text-lg"
                    size="txtInterRegular18"
                  >
                    What looked like a small patch of purple grass, above five
                    feet.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border hover:border-0 border-gray-900_19 border-solid hover:cursor-pointer flex flex-1 flex-col md:gap-10 gap-16 h-[443px] md:h-auto items-center justify-start hover:mx-0 p-16 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs2 shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-16 md:h-auto object-cover w-16"
                  src="images/img_booking1.png"
                  alt="bookingOne"
                />
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-full"
                    size="txtCircularStdBold28"
                  >
                    Easy Booking
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[222px] md:max-w-full text-center text-gray-900_7f text-lg"
                    size="txtInterRegular18"
                  >
                    Square, was moving across the sand in their direction.
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 border hover:border-0 border-gray-900_19 border-solid hover:cursor-pointer flex flex-1 flex-col md:gap-10 gap-16 h-[443px] md:h-auto items-center justify-start hover:mx-0 p-16 md:px-10 sm:px-5 rounded-[32px] hover:shadow-bs2 hover:w-full w-full">
                <Img
                  className="h-16 md:h-auto object-cover w-16"
                  src="images/img_cloudy1.png"
                  alt="cloudyOne"
                />
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <Text
                    className="leading-[120.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900"
                    size="txtCircularStdBold28"
                  >
                    Weather Forecast
                  </Text>
                  <Text
                    className="leading-[160.00%] max-w-[222px] md:max-w-full text-center text-gray-900_7f text-lg"
                    size="txtInterRegular18"
                  >
                    What looked like a small patch of purple grass, above five
                    feet.
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start max-w-[1184px] py-16 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="sm:text-[19px] md:text-[21px] text-[23px] text-pink-300 tracking-[4.60px] uppercase w-full"
                  size="txtCircularStdBold23"
                >
                  Top Destination
                </Text>
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 w-full"
                  size="txtCircularStdBold44"
                >
                  Explore top destination
                </Text>
              </div>
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col h-[100px] items-center justify-start p-[38px] sm:px-5 rounded-[50%] w-[100px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft1.svg"
                    alt="arrowleftOne"
                  />
                </div>
                <div className="bg-indigo-400 flex flex-col h-[100px] items-center justify-start p-[38px] sm:px-5 rounded-[50%] w-[100px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowleft2.svg"
                    alt="arrowleftTwo"
                  />
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col h-[575px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_rectangle6.png"
                  alt="rectangleSix"
                />
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-bl-[32px] rounded-br-[32px] shadow-bs4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="font-circularstd h-14 relative w-full">
                      <Text
                        className="absolute h-full inset-y-[0] leading-[120.00%] left-[0] max-w-[228px] md:max-w-full my-auto sm:text-[19px] md:text-[21px] text-[23px] text-gray-900"
                        size="txtCircularStdBold23Gray900"
                      >
                        Paradise Beach, Bantayan Island
                      </Text>
                      <Text
                        className="absolute right-[0] sm:text-[19px] md:text-[21px] text-[23px] text-pink-300 top-[0] w-auto"
                        size="txtCircularStdBold23"
                      >
                        $550.16
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      Rome, Italy
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-deep_orange-500 w-auto"
                      size="txtCircularStdBold23Deeporange500"
                    >
                      4.8
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1.svg"
                      alt="starOne"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col h-[575px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_rectangle6_350x373.png"
                  alt="rectangleSix"
                />
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-bl-[32px] rounded-br-[32px] shadow-bs4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row font-circularstd items-start justify-start w-full">
                      <Text
                        className="flex-1 leading-[120.00%] max-w-[235px] md:max-w-full sm:text-[19px] md:text-[21px] text-[23px] text-gray-900"
                        size="txtCircularStdBold23Gray900"
                      >
                        Ocean with full of Colors
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-pink-300 w-auto"
                        size="txtCircularStdBold23"
                      >
                        $20.99
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      Maldives
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-deep_orange-500 w-auto"
                      size="txtCircularStdBold23Deeporange500"
                    >
                      4.5
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1.svg"
                      alt="starOne"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col h-[575px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover w-full"
                  src="images/img_rectangle6_1.png"
                  alt="rectangleSix"
                />
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-start p-8 sm:px-5 rounded-bl-[32px] rounded-br-[32px] shadow-bs4 w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row font-circularstd items-start justify-start w-full">
                      <Text
                        className="flex-1 leading-[120.00%] max-w-[226px] md:max-w-full sm:text-[19px] md:text-[21px] text-[23px] text-gray-900"
                        size="txtCircularStdBold23Gray900"
                      >
                        Mountain View, Above the cloud
                      </Text>
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-pink-300 w-auto"
                        size="txtCircularStdBold23"
                      >
                        $150.99
                      </Text>
                    </div>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      United Arab Emeries{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-deep_orange-500 w-auto"
                      size="txtCircularStdBold23Deeporange500"
                    >
                      5.0
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_star1.svg"
                      alt="starOne"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[1482px] h-[825px] md:px-5 relative w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-y-[0] items-end justify-evenly left-[0] max-w-[1312px] my-auto py-16 w-full">
                <Img
                  className="md:flex-1 h-[697px] sm:h-auto object-cover w-[871px] md:w-full"
                  src="images/img_group9238.png"
                  alt="group9238"
                />
                <div className="flex flex-1 flex-col md:gap-10 gap-16 items-start justify-start w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col font-circularstd gap-4 items-start justify-start w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-pink-300 tracking-[4.60px] uppercase w-full"
                        size="txtCircularStdBold23"
                      >
                        Travel Point
                      </Text>
                      <Text
                        className="leading-[120.00%] max-w-[441px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-gray-900"
                        size="txtCircularStdBold44"
                      >
                        We helping you find your dream location
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[441px] md:max-w-full text-gray-900_7f text-lg"
                      size="txtInterRegular18"
                    >
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC.
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="sm:gap-5 gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 rounded-[32px] w-full">
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-deep_orange-500 w-auto"
                          size="txtCircularStdBold35"
                        >
                          500+
                        </Text>
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtInterRegular18Gray900"
                        >
                          Holiday Package
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 rounded-[32px] w-full">
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-deep_orange-500 w-auto"
                          size="txtCircularStdBold35"
                        >
                          100
                        </Text>
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtInterRegular18Gray900"
                        >
                          Luxury Hotel
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 rounded-[32px] w-full">
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-deep_orange-500 w-auto"
                          size="txtCircularStdBold35"
                        >
                          7
                        </Text>
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtInterRegular18Gray900"
                        >
                          Premium Airlines
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 flex-col gap-4 items-center justify-start p-8 sm:px-5 rounded-[32px] w-full">
                        <Text
                          className="sm:text-[31px] md:text-[33px] text-[35px] text-deep_orange-500 w-auto"
                          size="txtCircularStdBold35"
                        >
                          2k+
                        </Text>
                        <Text
                          className="text-gray-900 text-lg w-auto"
                          size="txtInterRegular18Gray900"
                        >
                          Happy Customer
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="absolute bottom-[22%] h-[353px] object-cover right-[0] w-1/5"
                src="images/img_frame50.png"
                alt="frameFifty"
              />
            </div>
            <div className="flex flex-col md:px-5 relative w-full">
              <div className="flex flex-col mx-auto w-full">
                <div className="sm:h-[1352px] md:h-[1790px] h-[1993px] mx-auto w-full">
                  <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-between max-w-[1312px] py-16 right-[0] top-[0] w-full">
                    <div className="flex flex-1 flex-col md:gap-10 gap-16 items-start justify-start w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col font-circularstd gap-4 items-start justify-start w-full">
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-pink-300 tracking-[4.60px] uppercase w-full"
                            size="txtCircularStdBold23"
                          >
                            Key features
                          </Text>
                          <Text
                            className="sm:text-[34px] md:text-[40px] text-[44px] text-gray-900 w-full"
                            size="txtCircularStdBold44"
                          >
                            We offer best services
                          </Text>
                        </div>
                        <Text
                          className="leading-[160.00%] text-gray-900_7f text-lg"
                          size="txtInterRegular18"
                        >
                          <>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature
                            <br />
                            from 45 BC.
                          </>
                        </Text>
                      </div>
                      <List
                        className="flex flex-col items-start w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-start my-0 p-8 sm:px-5 rounded-[32px] w-full">
                          <div className="bg-deep_orange-500 flex flex-col h-[100px] items-center justify-start p-[26px] sm:px-5 rounded-[32px] w-[100px]">
                            <Img
                              className="h-12 w-12"
                              src="images/img_location2.svg"
                              alt="locationTwo"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900 w-full"
                              size="txtCircularStdBold23Gray900"
                            >
                              We offer best services
                            </Text>
                            <Text
                              className="text-gray-900_7f text-lg w-full"
                              size="txtInterRegular18"
                            >
                              Lorem Ipsum is not simply random text
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-1 sm:flex-col flex-row gap-8 items-center justify-start my-0 p-8 sm:px-5 rounded-[32px] w-full">
                          <div className="bg-amber-300 flex flex-col h-[100px] items-start justify-start p-6 sm:px-5 rounded-[32px] w-[100px]">
                            <Img
                              className="h-12 mb-1 w-12"
                              src="images/img_calendar1.svg"
                              alt="calendarOne"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900 w-full"
                              size="txtCircularStdBold23Gray900"
                            >
                              Schedule your trip
                            </Text>
                            <Text
                              className="text-gray-900_7f text-lg w-full"
                              size="txtInterRegular18"
                            >
                              It has roots in a piece of classical
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-1 sm:flex-col flex-row gap-8 items-center justify-start my-0 p-8 sm:px-5 rounded-[32px] w-full">
                          <div className="bg-pink-300 flex flex-col h-[100px] items-center justify-start p-[26px] sm:px-5 rounded-[32px] w-[100px]">
                            <Img
                              className="h-12 w-12"
                              src="images/img_ticket1.svg"
                              alt="ticketOne"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900 w-full"
                              size="txtCircularStdBold23Gray900"
                            >
                              Get discounted coupons
                            </Text>
                            <Text
                              className="text-gray-900_7f text-lg w-full"
                              size="txtInterRegular18"
                            >
                              Lorem Ipsum is not simply random text
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <Img
                      className="md:flex-1 h-[869px] sm:h-auto object-cover w-[693px] md:w-full"
                      src="images/img_background.png"
                      alt="background"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[1353px] inset-x-[0] items-center justify-end mx-auto p-32 md:px-10 sm:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_group1.png')" }}
                  >
                    <div className="flex md:flex-col flex-row gap-14 items-center justify-start max-w-[1184px] mb-[211px] mt-[239px] w-full">
                      <div className="bg-white-A700 border border-gray-900_19 border-solid flex flex-col h-[100px] items-center justify-start p-[38px] sm:px-5 rounded-[50%] w-[100px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowleft1.svg"
                          alt="arrowleftOne_One"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-14 items-center justify-start w-full">
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-pink-300 tracking-[4.60px] uppercase w-full"
                            size="txtCircularStdBold23"
                          >
                            Testimonials
                          </Text>
                          <Text
                            className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-gray-900 w-full"
                            size="txtCircularStdBold44"
                          >
                            Trust our clients
                          </Text>
                        </div>
                        <Img
                          className="h-32 md:h-auto rounded-[50%] w-32"
                          src="images/img_ellipse22.png"
                          alt="ellipseTwentyTwo"
                        />
                        <div className="flex flex-col gap-8 items-center justify-start w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-center text-deep_orange-500 w-full"
                            size="txtCircularStdBold28Deeporange500"
                          >
                            <span className="text-deep_orange-500 font-circularstd font-bold">
                              Mark Smit
                            </span>
                            <span className="text-deep_orange-500 font-circularstd font-bold">
                              h{" "}
                            </span>
                            <span className="md:text-[21px] sm:text-[19px] text-gray-900_bf font-circularstd text-[23px] font-bold">
                              / Travel Enthusiast
                            </span>
                          </Text>
                          <Img
                            className="h-8 w-56"
                            src="images/img_frame54.svg"
                            alt="frameFiftyFour"
                          />
                        </div>
                        <Text
                          className="leading-[160.00%] sm:text-[19px] md:text-[21px] text-[23px] text-center text-gray-900_bf"
                          size="txtCircularStdBook23"
                        >
                          <>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots
                            <br />
                            in a piece of classical Latin literature from 45 BC.
                          </>
                        </Text>
                        <PagerIndicator
                          className="flex gap-6 h-6 items-start justify-start w-[120px]"
                          count={3}
                          activeCss="inline-block cursor-pointer rounded-[50%] h-6 bg-pink-300 w-6"
                          activeIndex={1}
                          inactiveCss="inline-block cursor-pointer rounded-[50%] h-6 bg-gray-900_0c w-6"
                          selectedWrapperCss="inline-block"
                          unselectedWrapperCss="inline-block"
                        />
                      </div>
                      <div className="bg-indigo-400 flex flex-col h-[100px] items-center justify-start p-[38px] sm:px-5 rounded-[50%] w-[100px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowleft2.svg"
                          alt="arrowleftTwo_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-300_14 flex flex-col items-center justify-center max-w-[1184px] mt-[-162.73px] mx-auto md:px-10 px-16 sm:px-5 py-32 rounded-[32px] w-full z-[1]">
                  <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-center text-pink-300 tracking-[4.60px] uppercase w-full"
                        size="txtCircularStdBold23"
                      >
                        subscribe to our newsletter
                      </Text>
                      <Text
                        className="leading-[120.00%] max-w-[1056px] md:max-w-full sm:text-[41px] md:text-[47px] text-[55px] text-center text-gray-900"
                        size="txtCircularStdBold55"
                      >
                        Prepare yourself & let’s explore the beauty of the world
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row md:gap-10 gap-16 items-start justify-start w-full">
                      <Input
                        name="frameFiftySix"
                        placeholder="Your Email"
                        className="font-bold md:text-[21px] p-0 placeholder:text-gray-900_bf sm:text-[19px] text-[23px] text-center w-full"
                        wrapClassName="flex flex-1 sm:flex-1 w-[72%] sm:w-full"
                        type="email"
                        prefix={
                          <Img
                            className="h-8 mr-4 my-auto"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                        }
                      ></Input>
                      <Button
                        className="!text-white-A700 cursor-pointer font-bold h-24 rounded-[32px] sm:text-[19px] md:text-[21px] text-[23px] text-center"
                        color="indigo_400"
                        size="sm"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                className="h-44 mb-[996px] ml-[93px] mt-[-NaNpx] z-[1]"
                src="images/img_graphicelements.svg"
                alt="graphicelements"
              />
              <Img
                className="h-[351px] mb-[274px] ml-auto mt-[-128px] object-cover z-[1]"
                src="images/img_objects.png"
                alt="objects"
              />
              <div className="flex md:flex-col flex-row md:gap-10 gap-16 items-start justify-start max-w-[1184px] mt-[-NaNpx] mx-auto py-16 w-full z-[1]">
                <div className="flex flex-1 flex-col md:gap-10 gap-16 items-start justify-start w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-auto">
                      <Img
                        className="h-10 md:h-auto object-cover w-10"
                        src="images/img_vector.png"
                        alt="vector_One"
                      />
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                        size="txtCircularStdBlack24"
                      >
                        Travlog
                      </Text>
                    </div>
                    <Text
                      className="leading-[160.00%] max-w-[560px] md:max-w-full sm:text-[19px] md:text-[21px] text-[23px] text-gray-900_7f"
                      size="txtCircularStdBook23Gray9007f"
                    >
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC.
                    </Text>
                  </div>
                  <Img
                    className="h-8 w-40"
                    src="images/img_frame72.svg"
                    alt="frameSeventyTwo"
                  />
                </div>
                <div className="flex flex-1 sm:flex-col flex-row gap-8 items-start justify-start w-full">
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900 w-full"
                      size="txtCircularStdBold23Gray900"
                    >
                      Company
                    </Text>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      About
                    </Text>
                    <a
                      href="javascript:"
                      className="text-gray-900_bf text-lg w-full"
                    >
                      <Text size="txtInterRegular18Gray900bf">Career</Text>
                    </a>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      Mobile
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900 w-full"
                      size="txtCircularStdBold23Gray900"
                    >
                      Contact
                    </Text>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      Why Travlog?
                    </Text>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      Partner with us
                    </Text>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      FAQ’s
                    </Text>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      Blog
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                    <Text
                      className="sm:text-[19px] md:text-[21px] text-[23px] text-gray-900 w-full"
                      size="txtCircularStdBold23Gray900"
                    >
                      Meet Us
                    </Text>
                    <Text
                      className="leading-[160.00%] max-w-[165px] md:max-w-full text-gray-900_bf text-lg"
                      size="txtInterRegular18Gray900bf"
                    >
                      +00 92 1234 56789
                    </Text>
                    <Text
                      className="text-gray-900_bf text-lg w-full"
                      size="txtInterRegular18Gray900bf"
                    >
                      info@travlog.com
                    </Text>
                    <div className="flex flex-col font-inter gap-2 items-start justify-start w-full">
                      <Text
                        className="leading-[160.00%] max-w-[165px] md:max-w-full text-gray-900_bf text-lg"
                        size="txtInterRegular18Gray900bf"
                      >
                        205. R Street, New York
                      </Text>
                      <Text
                        className="text-gray-900_bf text-lg w-full"
                        size="txtInterRegular18Gray900bf"
                      >
                        BD23200
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPage;
