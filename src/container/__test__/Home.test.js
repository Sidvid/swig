/**
 * @jest-environment jsdom
 */
import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import Home from "../Home.js";
import { BrowserRouter } from "react-router-dom";
import Card from "../../components/Card.js";
import useDebounce from "../../utils/hooks/useDebounce.js";

// mock data for store
const mockStore = {
  restrauntData: [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "337335",
        name: "Kannur food kitchen",
        uuid: "c70b61bc-0f68-4e24-996b-749fbf295c35",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "a27weqanhnszqiuzsoik",
        cuisines: ["Kerala", "Biryani", "Beverages"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        slaString: "35 MINS",
        lastMileTravel: 2.5,
        slugs: {
          restaurant: "kannur-food-kitchen-btm-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
        locality: "1st  Stage",
        parentId: 114756,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off on all orders",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off on all orders",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off on all orders",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 2900,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 2900,
          message: "",
          title: "Delivery Charge",
          amount: "2900",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "337335",
          deliveryTime: 35,
          minDeliveryTime: 35,
          maxDeliveryTime: 35,
          lastMileTravel: 2.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "3.8",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "410683",
        name: "Soul Rasa",
        uuid: "5fddc67b-5287-45a0-a252-c34eb9b290d1",
        city: "1",
        area: "Koramangala",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "xoth5ysuv2r6ctizaso5",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian",
        ],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        slaString: "27 MINS",
        lastMileTravel: 2.4000000953674316,
        slugs: {
          restaurant: "hb-koramangala-koramangala",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "88/1,Ward No.66, Sajjapura Road, Madiwala, Jakkasandra Village Bangalore-South, 560034",
        locality: "Jakkasandra",
        parentId: 239281,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "FLAT150 off",
          shortDescriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹150 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "FLAT150 off | Use FLATDEAL",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 2900,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 2900,
          message: "",
          title: "Delivery Charge",
          amount: "2900",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6429962~p=7~eid=00000187-6504-e314-1df6-bd7f00ac074a",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.4 kms",
        hasSurge: false,
        sla: {
          restaurantId: "410683",
          deliveryTime: 27,
          minDeliveryTime: 27,
          maxDeliveryTime: 27,
          lastMileTravel: 2.4000000953674316,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.4",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
  ],
};

// mock useStore hook
jest.mock("../../utils/hooks/Store.js", () => ({
  useStore: () => ({
    store: {
      restrauntData: mockStore,
      name: "siddhartha",
    },
    setStore: jest.fn(),
  }),
}));

// mock useDebounce hook
jest.mock("../../utils/hooks/useDebounce.js", () => jest.fn((value) => value));

describe("Home Component", () => {
  it("should render the input and the list of restaurants", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputElement = screen.getByPlaceholderText(
      /Search for the Reastraunt/
    );
    expect(inputElement).toBeInTheDocument();
    const cards = screen.getAllByTestId("home_test");
    expect(cards.length).toBe(1);
  });

  it("should render the list of restaurants based on the search input", async () => {
    const { getAllByTestId, getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const inputElement = screen.getByPlaceholderText(
      /Search for the Reastraunt/
    );
    fireEvent.change(inputElement, {
      target: { value: "Kannur food kitchen" },
    });
    const appHeader = getByTestId("home_test");
    await waitFor(() => expect(appHeader).toBeInTheDocument());
  });

  it("should render the error message if no restaurants found", () => {
    const emptyStore = { restrauntData: [] };
    jest.mock("../../utils/hooks/Store.js", () => ({
      useStore: () => ({
        store: emptyStore,
        setStore: jest.fn(),
      }),
    }));
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const errorMessage = screen.getByText(/Restraunt not found!!/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
